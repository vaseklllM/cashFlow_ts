import { TCurrency, TRate } from "../../interfaces";

// Интерфейс BodyText в генераторі таблиці
export interface IBodyText {
    title: string
    emptyArray: string
    collumn: Array<string>
    rows: string[][] | 'Loading...'
}

export interface INewCashFlowItem {
    name?: string
    id?: number
    pcs?: number
    price?: number
    income?: number
    currency?: TCurrency
    rate?: TRate
    dateBuy?: string | Date
    checked?: boolean
}

export interface IsetNewCashFlowItem {
    key: string
    value: string | number
}