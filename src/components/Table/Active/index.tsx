import React, { Dispatch } from "react"
import { connect } from "react-redux"
import {
    IServerMoney,
    ICashFlow,
    ITableCreatorBodyText,
    IValut
} from "../../../interfaces"
import { setCheckBox } from "../../../store/serverMoney/action"
import { Calc } from "../../../utils"
import CreateTable from "../Creator"

interface IProps {
    cashFlow: ICashFlow[]
    searchCashFlow: ICashFlow[]
    setCheckBox(index: number): void
}

// Таблиця активів
function ActiveTable({ cashFlow, searchCashFlow, setCheckBox }: IProps) {
    const mainArray = searchCashFlow.length === 0 ? cashFlow : searchCashFlow

    const obj = mainArray.filter(item => item.income > 0)
    let checked: number | null = null
    obj.forEach((item, index) => {
        if (item.checked) {
            checked = index
        }
    })

    const setId = (id: number): void => {
        obj.forEach((item, index) => {
            if (index === id) {
                setCheckBox(item.id)
            }
        })
    }

    const rows: string[][] = createTableContent(obj)
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
        const { name } = item
        return [name]
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
