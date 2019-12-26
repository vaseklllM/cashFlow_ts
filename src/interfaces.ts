import { INewCashFlowItem } from "./components/Table/interface"

export interface IServerMoney {
    searchCashFlow: TSearchCashFlow
    cashFlow: TCashFlow
    vallets: TValut
    newCashFlowItem: INewCashFlowItem
}


export interface IAction {
    type: string
    payload?: any
}

export type TCashFlow = ICashFlow[] | "Loading..." | "Error"
export type TValut = IValut[] | "Loading..." | "Error"
export type TSearchCashFlow = ICashFlow[] | "None"

export interface ICashFlow {
    name: string
    id: number
    pcs: number
    price: number
    income: number
    currency: TCurrency
    rate: TRate
    dateBuy: string | Date
    checked: boolean
}

export type TCurrency = "₽" | "₴" | "$" | "₿" | "€"
export type TRate = "RUB" | "UAH" | "USD" | "BTC" | "EUR"

export interface IValut {
    cc: TRate
    sumbol: TCurrency
    value: number | null
}
