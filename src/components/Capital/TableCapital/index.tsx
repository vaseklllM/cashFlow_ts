import React, { Dispatch } from "react"
import { connect } from "react-redux"
import {
    IServerMoney,
    TCashFlow,
    ICashFlow,
    IValut,
    TSearchCashFlow
} from "../../../interfaces"
import { IBodyText } from "../../Table/interface"
import { setCheckBox } from "../../../store/serverMoney/action"
import CreateTable from "../../Table/Creator"
import { getCapital } from "../../../utils/getterCashFlow"
import { mathFullPrice, lastConvert } from "../../../utils/calc"

interface IProps {
    cashFlow: TCashFlow
    searchCashFlow: TSearchCashFlow
    setCheckBox(index: number): void
}

// Таблиця активів
const CapitalTable: React.FC<IProps> = props => {
    const { cashFlow, searchCashFlow, setCheckBox } = props
    
    let mainArray: TCashFlow = "Loading..."

    searchCashFlow !== "None" && Array.isArray(searchCashFlow)
        ? (mainArray = searchCashFlow)
        : (mainArray = cashFlow)

    mainArray = getCapital(mainArray)

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
            minWidth='300px'
        />
    )
}

const bodyText: IBodyText = {
    title: "Капітал",
    emptyArray: "Немає капіталу",
    collumn: ["Назва", "Кількість"],
    rows: "Loading..."
}

function createTableContent(obj: ICashFlow[]): string[][] {
    var newObj: string[][] = obj.map(item => {
        const { name } = item
        return [name, lastConvert(item.price * item.pcs, " " + item.currency)]
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

export default connect(mapStateToProps, mapDispatchToProps)(CapitalTable)
