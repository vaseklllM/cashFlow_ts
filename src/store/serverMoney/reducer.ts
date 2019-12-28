import { IServerMoney, IAction, ICashFlow, TCurrency } from "../../interfaces"
import {
    SET_CASH_FLOW,
    SET_VALLET_COURSE,
    SEARCH_CASH_FLOW,
    EDIT_NEW_CASH_FLOW_ITEM,
    SET_CASH_FLOW_CHACKBOX,
    CHANGE_PARAMETRS_CASH_FLOW,
    CLEAR_NEW_CASH_FLOW_ITEM,
    DELETE_ITEMS_FROM_CASH_FLOW
} from "./action"

const cashFlowState: IServerMoney = {
    searchCashFlow: "None",
    cashFlow: "Loading...",
    vallets: "Loading...",
    newCashFlowItem: {}
}

const serverMoneyReducer = (
    state: IServerMoney = cashFlowState,
    action: IAction
): IServerMoney => {
    switch (action.type) {
        case DELETE_ITEMS_FROM_CASH_FLOW:
            if (Array.isArray(state.cashFlow)) {
                let newCashFlow: ICashFlow[] = state.cashFlow
                action.payload.forEach((el: number) => {
                    newCashFlow = newCashFlow.filter(i => i.id !== el)
                })
                return {
                    ...state,
                    cashFlow: newCashFlow
                }
            }
            return {
                ...state
            }

        case CLEAR_NEW_CASH_FLOW_ITEM:
            return {
                ...state,
                newCashFlowItem: {}
            }

        // получає cashFlow з сервера
        case SET_CASH_FLOW:
            return { ...state, cashFlow: action.payload }

        // получає курси валют з сервера
        case SET_VALLET_COURSE:
            return { ...state, vallets: action.payload }

        // Змінює item.checked по id переданому в action.payload
        case SET_CASH_FLOW_CHACKBOX:
            if (state.cashFlow !== "Loading..." && state.cashFlow !== "Error") {
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

        // Редактор newCashFlowItem
        case EDIT_NEW_CASH_FLOW_ITEM:
            if (action.payload.key) {
                if (
                    action.payload.key === "income" ||
                    action.payload.key === "pcs" ||
                    action.payload.key === "price"
                ) {
                    if (action.payload.value === "") {
                        return {
                            ...state,
                            newCashFlowItem: {
                                ...state.newCashFlowItem,
                                [action.payload.key]: ""
                            }
                        }
                    }
                    return {
                        ...state,
                        newCashFlowItem: {
                            ...state.newCashFlowItem,
                            [action.payload.key]: parseFloat(
                                action.payload.value
                            )
                        }
                    }
                // } else if (action.payload.key === "name") {
                //     if (action.payload.value && action.payload.value !== "") {
                //         return {
                //             ...state,
                //             newCashFlowItem: {
                //                 ...state.newCashFlowItem,
                //                 name: action.payload.value
                //             }
                //         }
                //     } else {
                //         return {
                //             ...state,
                //             newCashFlowItem: {
                //                 ...state.newCashFlowItem,
                //                 name: action.payload.value
                //             }
                //         }
                //     }
                } else {
                    return {
                        ...state,
                        newCashFlowItem: {
                            ...state.newCashFlowItem,
                            [action.payload.key]: action.payload.value
                        }
                    }
                }
            }
            return {
                ...state
            }

        // пошук по всіх таблицях
        case SEARCH_CASH_FLOW:
            if (action.payload === "") {
                return {
                    ...state,
                    searchCashFlow: "None"
                }
            }
            let arr: ICashFlow[] = []
            if (action.payload !== "" && Array.isArray(state.cashFlow)) {
                arr = state.cashFlow.filter(item => {
                    const name = item.name.toLowerCase()
                    return name.indexOf(action.payload.toLowerCase()) > -1
                })
            }
            return {
                ...state,
                searchCashFlow: arr
            }

        // save new cashFlow paramets
        case CHANGE_PARAMETRS_CASH_FLOW:
            if (
                Array.isArray(state.cashFlow) &&
                action.payload &&
                Array.isArray(state.vallets)
            ) {
                // визачення символу валюти
                let newCurrency: TCurrency = "₴"
                state.vallets.forEach(el => {
                    if (el.cc === state.newCashFlowItem.rate) {
                        newCurrency = el.sumbol
                    }
                })

                // створення нового елемента CashFlow
                let tempItem: ICashFlow = state.cashFlow[0]
                state.cashFlow.forEach(i => {
                    if (i.id === action.payload) {
                        tempItem = i
                    }
                })
                tempItem = { ...tempItem, ...state.newCashFlowItem }
                // console.log(tempItem);
                // створення нового массиву CashFlow
                const tempCashFlow: ICashFlow[] = state.cashFlow.map(
                    element => {
                        if (element.id === action.payload) {
                            element = {
                                ...tempItem,
                                currency: newCurrency
                            }
                            return element
                        }
                        return element
                    }
                )
                return {
                    ...state,
                    cashFlow: tempCashFlow
                }
            }
            return {
                ...state
            }

        default:
            return state
    }
}

export default serverMoneyReducer
