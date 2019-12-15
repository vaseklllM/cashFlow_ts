export interface IServerMoney {
    searchCashFlow: TCashFlow
    cashFlow: TCashFlow
    vallets: TValut
    newCashFlowItem?: ICashFlow
}

export interface INewCashFlowItem {}

export interface IAction {
    type: string
    payload?: any
}

export type TCashFlow = ICashFlow[] | "Loading..." | "Error"
export type TValut = IValut[] | "Loading..." | "Error"


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

// Интерфейс BodyText в генераторі таблиці
export interface ITableCreatorBodyText {
    title: string
    emptyArray: string
    collumn: Array<string>
}
