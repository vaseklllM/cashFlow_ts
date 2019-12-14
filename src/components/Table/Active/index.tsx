import React, { Dispatch } from "react"
import { connect } from "react-redux"
import {
    IServerMoney,
    TCashFlow,
    ICashFlow,
    ITableCreatorBodyText,
    IValut
} from "../../../interfaces"
import { setCheckBox } from "../../../store/serverMoney/action"
import { Calc } from "../../../utils"
import CreateTable from "../Creator"

interface IProps {
    cashFlow: TCashFlow
    searchCashFlow: TCashFlow
    setCheckBox(index: number): void
}

// Таблиця активів
function ActiveTable({ cashFlow, searchCashFlow, setCheckBox }: IProps) {
    let mainArray: TCashFlow = "Loading..."

    if (
        searchCashFlow !== "Loading..." &&
        searchCashFlow !== "Error" &&
        searchCashFlow.length !== 0
    ) {
        mainArray = searchCashFlow
    } else if (
        cashFlow !== "Loading..." &&
        cashFlow !== "Error" &&
        cashFlow.length !== 0
    ) {
        mainArray = cashFlow
    }

    let obj: ICashFlow[] = []
    let checked: number | null = null
    if (mainArray !== "Loading...") {
        obj = mainArray.filter(item => item.income > 0)
        obj.forEach((item, index) => {
            if (item.checked) {
                checked = index
            }
        })
    }

    const setId = (id: number): void => {
        obj.forEach((item, index) => {
            if (index === id) {
                setCheckBox(item.id)
            }
        })
    }

    let rows: string[][] = []
    if (mainArray !== "Loading...") {
        rows = createTableContent(obj)
    }
    let fullPrice: IValut[] = Calc.mathFullPrice(obj, ["price", "pcs"])

    return (
        <CreateTable
            rows={rows}
            fullPrice={fullPrice}
            bodyText={bodyText}
            checked={checked}
            setCheckBox={setId}
            minWidth='900px'
        />
    )
}

const bodyText: ITableCreatorBodyText = {
    title: "Активи",
    emptyArray: "Немає Активів",
    collumn: [
        "Назва",
        "Дата покупки",
        "Пройшло від покупки",
        "Кількість/шт.",
        "Ціна за шт.",
        "Ціна загалом",
        "ROI"
    ]
}

const createTableContent = (obj: ICashFlow[]): string[][] => {
    var newObj: string[][] = obj.map(item => {
        const { name, dateBuy } = item
        return [
            name,
            Calc.showDate(dateBuy),
            Calc.retentionTime(dateBuy),
            Calc.showPcs(item),
            Calc.showPriceCashFlow(item),
            Calc.showFullPrice(item),
            Calc.roi(item)
        ]
    })
    return newObj || null
}

interface IState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IState) => {
    return {
        cashFlow: serverMoney.cashFlow,
        searchCashFlow: serverMoney.searchCashFlow
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setCheckBox: (index: number) => dispatch(setCheckBox(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveTable)
