import { IServerMoney, IAction, ICashFlow } from "../../interfaces"
import {
    SET_CASH_FLOW,
    SET_VALLET_COURSE,
    SEARCH_CASH_FLOW,
    ON_DELETE_CASH_FLOW_ITEM,
    CREATE_NEW_CASH_FLOW_ITEM,
    SET_NEW_CASH_FLOW_ITEM,
    SET_CASH_FLOW_CHACKBOX
} from "./action"
import { Calc } from "../../utils"

const cashFlowState: IServerMoney = {
    searchCashFlow: null,
    cashFlow: null,
    vallets: [],
    newCashFlowItem: null
}

const serverMoneyReducer = (
    state: IServerMoney = cashFlowState,
    action: IAction
): IServerMoney => {
    switch (action.type) {
        // получає cashFlow з сервера
        case SET_CASH_FLOW:
            return { ...state, cashFlow: action.payload }

        // получає курси валют з сервера
        case SET_VALLET_COURSE:
            return { ...state, vallets: action.payload }

        // Змінює item.checked по id переданому в action.payload
        case SET_CASH_FLOW_CHACKBOX:
            if (state.cashFlow !== null) {
                const newCashFlow = state.cashFlow.map(item => {
                    if (item.id === action.payload) {
                        item.checked = !item.checked
                        return item
                    }
                    item.checked = false
                    return item
                })
                return { ...state, cashFlow: newCashFlow }
            } else return { ...state }

        // Редактор cashFlow
        case SET_NEW_CASH_FLOW_ITEM:
            return {
                ...state,
                newCashFlowItem: { ...state.newCashFlowItem, ...action.payload }
            }

        // пошук по всіх таблицях
        case SEARCH_CASH_FLOW:
            let arr: ICashFlow[] | null = null
            if (action.payload !== "" && state.cashFlow !== null) {
                arr = state.cashFlow.filter(item => {
                    const name = item.name.toLowerCase()
                    return name.indexOf(action.payload.toLowerCase()) > -1
                })
            }
            return {
                ...state,
                searchCashFlow: arr
            }

        // видалення з cashFlow приймає массив з id елементами які треба видалити
        case ON_DELETE_CASH_FLOW_ITEM:
            return {
                ...state,
                cashFlow: deleteId(action.payload, state.cashFlow),
                searchCashFlow: state.searchCashFlow
                    ? deleteId(action.payload, state.searchCashFlow)
                    : null
            }

        // Створює новий обєкт в cashFlow
        case CREATE_NEW_CASH_FLOW_ITEM:
            return {
                ...state,
                cashFlow: CreateNewItem(state.cashFlow)
            }

        // змінює cashFlow обєкти
        // case CHANGE_PARAMETRS_CASH_FLOW:
        //     const checkType = (x: number): number => Math.floor(x)

        //     const CreateObject = (
        //         newCashFlowItem: ICashFlow,
        //         item: ICashFlow
        //     ): ICashFlow => {
        //         const {
        //             income,
        //             pcs,
        //             price,
        //             name,
        //             currency,
        //             rate,
        //             dateBuy
        //         } = newCashFlowItem

        //         return {
        //             ...item,
        //             name: name !== "" ? name : item.name,
        //             pcs: checkType(pcs),
        //             price: checkType(price),
        //             income: checkType(income),
        //             currency,
        //             rate,
        //             dateBuy
        //         }
        //     }
        //     let newCeshflow: JSX.Element[] | null = null
        //     if (state.cashFlow !== null) {
        //         newCeshflow = state.cashFlow.map(item => {
        //             if (item.id === action.payload) {
        //                 return CreateObject(state.newCashFlowItem, item)
        //             } else return item
        //         })
        //     }
        //     let newSearchCashFlow: null | JSX.Element[] = null
        //     if (state.searchCashFlow !== null) {
        //         newSearchCashFlow = state.searchCashFlow.map(item => {
        //             if (item.id === action.payload) {
        //                 return CreateObject(state.newCashFlowItem, item)
        //             } else return item
        //         })
        //     }

        //     return {
        //         ...state,
        //         cashFlow: newCeshflow,
        //         searchCashFlow: newSearchCashFlow
        //     }

        default:
            return state
    }
}

function CreateNewItem(cashFlow: ICashFlow[] | null) {
    if (cashFlow !== null) {
        const newItem: ICashFlow = {
            checked: false,
            dateBuy: new Date(),
            id: Calc.lastIdFromCashFlow(cashFlow),
            currency: "₴",
            income: 0,
            name: "Назва",
            pcs: 1,
            price: 0,
            rate: "UAH"
        }
        return [newItem, ...cashFlow]
    } else return cashFlow
}

function deleteId(arr: Array<number>, cashFlow: ICashFlow[] | null) {
    if (cashFlow !== null) {
        let delCashFlow = [...cashFlow]
        arr.forEach((item: number) => {
            delCashFlow = delCashFlow.filter((i: ICashFlow) => i.id !== item)
        })
        return delCashFlow
    } else {
        return cashFlow
    }
}

export default serverMoneyReducer
