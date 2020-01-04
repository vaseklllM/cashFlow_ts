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
import CreateTable from "../Creator"
import { getPassive } from "../../../utils/getterCashFlow"
import { retentionTime, showDate, mathRoi, mathFullPrice, lastConvert } from "../../../utils/calc"

interface IProps {
    cashFlow: TCashFlow
    searchCashFlow: TSearchCashFlow
    setCheckBox(index: number): void
}

// Таблиця активів
function PasiveTable({ cashFlow, searchCashFlow, setCheckBox }: IProps) {
    let mainArray: TCashFlow = "Loading..."

    searchCashFlow !== "None" && Array.isArray(searchCashFlow)
        ? (mainArray = searchCashFlow)
        : (mainArray = cashFlow)

    mainArray = getPassive(mainArray)

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

    let fullPrice: IValut[] = mathFullPrice(obj, ["price", "pcs"])
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
    title: "Пасиви",
    emptyArray: "Немає пасивів",
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
            showDate(dateBuy),
            retentionTime(dateBuy),
            lastConvert(pcs, " шт."),
            lastConvert(price, ` ${currency}`),
            lastConvert(pcs * price, ` ${currency}`),
            mathRoi(item)
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

export default connect(mapStateToProps, mapDispatchToProps)(PasiveTable)
