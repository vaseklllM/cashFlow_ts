import React, { Dispatch } from "react"
import { connect } from "react-redux"
import {
    IServerMoney,
    TCashFlow,
    ICashFlow,
    IValut,
    TSearchCashFlow
} from "../../../interfaces"
import { IBodyText } from "../interface"
import { setCheckBox } from "../../../store/serverMoney/action"
import { Calc, getterCashFlow } from "../../../utils"
import CreateTable from "../Creator"

interface IProps {
    cashFlow: TCashFlow
    searchCashFlow: TSearchCashFlow
    setCheckBox(index: number): void
}

// Таблиця активів
function ActiveTable({ cashFlow, searchCashFlow, setCheckBox }: IProps) {
    let mainArray: TCashFlow = "Loading..."

    Array.isArray(searchCashFlow)
        ? (mainArray = searchCashFlow)
        : (mainArray = cashFlow)

    mainArray = getterCashFlow.getActive(mainArray)

    let obj: ICashFlow[] = []
    let checked: number | null = null
    if (Array.isArray(mainArray)) {
        // filter повертає активи
        obj = mainArray
        obj.forEach((item, index) => {
            if (item.checked) checked = index
        })
        bodyText.rows = createTableContent(obj)
    }

    // повертає id строки по якій нажали
    const setId = (id: number): void => {
        obj.forEach((item, index) => {
            if (index === id) setCheckBox(item.id)
        })
    }

    let fullPrice: IValut[] = Calc.mathFullPrice(obj, ["price", "pcs"])
    return (
        <CreateTable
            fullPrice={fullPrice}
            bodyText={bodyText}
            checked={checked}
            setCheckBox={setId}
            minWidth='900px'
        />
    )
}

const bodyText: IBodyText = {
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
    ],
    rows: "Loading..."
}

function createTableContent(obj: ICashFlow[]): string[][] {
    var newObj: string[][] = obj.map(item => {
        const { name, dateBuy, pcs, price, currency } = item
        return [
            name,
            Calc.showDate(dateBuy),
            Calc.retentionTime(dateBuy),
            Calc.LC(pcs, " шт."),
            Calc.LC(price, ` ${currency}`),
            Calc.LC(pcs * price, ` ${currency}`),
            Calc.roi(item)
        ]
    })
    return newObj || null
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => {
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
