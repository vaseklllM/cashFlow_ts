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
import { getCosts } from "../../../utils/getterCashFlow"
import { mathFullPrice, lastConvert } from "../../../utils/calc"

interface IProps {
    cashFlow: TCashFlow
    searchCashFlow: TSearchCashFlow
    setCheckBox(index: number): void
}

// Таблиця активів
const CostsTable: React.FC<IProps> = props => {
    const { cashFlow, searchCashFlow, setCheckBox } = props

    let mainArray: TCashFlow = "Loading..."

    searchCashFlow !== "None" && Array.isArray(searchCashFlow)
        ? (mainArray = searchCashFlow)
        : (mainArray = cashFlow)

    mainArray = getCosts(mainArray)

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

    let fullPrice: IValut[] = mathFullPrice(obj, ["income"])
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
    title: "Витрати",
    emptyArray: "Немає витрат",
    collumn: ["Назва", "Витрати/міс."],
    rows: "Loading..."
}

function createTableContent(obj: ICashFlow[]): string[][] {
    var newObj: string[][] = obj.map(item => {
        const { name } = item
        return [name, lastConvert(item.income, " " + item.currency)]
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

export default connect(mapStateToProps, mapDispatchToProps)(CostsTable)
