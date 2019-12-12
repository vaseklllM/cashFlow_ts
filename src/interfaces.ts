export interface IServerMoney {
    searchCashFlow: ICashFlow[] | null
    cashFlow: ICashFlow[] | null
    vallets: Array<string>
    newCashFlowItem: ICashFlow | null
}

export interface INewCashFlowItem {}

export interface IAction {
    type: string
    payload?: any
}

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
