import { IServerMoney, IAction, ICashFlow, TCurrency } from "../../interfaces"
import {
    SET_CASH_FLOW,
    SET_VALLET_COURSE,
    SEARCH_CASH_FLOW,
    // ON_DELETE_CASH_FLOW_ITEM,
    // CREATE_NEW_CASH_FLOW_ITEM,
    SET_NEW_CASH_FLOW_ITEM,
    SET_CASH_FLOW_CHACKBOX,
    CHANGE_PARAMETRS_CASH_FLOW
} from "./action"
// import { Calc } from "../../utils"

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

        // Редактор cashFlow
        case SET_NEW_CASH_FLOW_ITEM:
            if (action.payload.key) {
                if (
                    action.payload.key === "pcs" ||
                    action.payload.key === "price" ||
                    action.payload.key === "income"
                ) {
                    return {
                        ...state,
                        newCashFlowItem: {
                            ...state.newCashFlowItem,
                            ...{
                                [action.payload.key]: parseFloat(
                                    action.payload.value
                                )
                            }
                        }
                    }
                } else {
                    return {
                        ...state,
                        newCashFlowItem: {
                            ...state.newCashFlowItem,
                            ...{ [action.payload.key]: action.payload.value }
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

        // видалення з cashFlow приймає массив з id елементами які треба видалити
        // case ON_DELETE_CASH_FLOW_ITEM:
        //     return {
        //         ...state,
        //         cashFlow: deleteId(action.payload, state.cashFlow),
        //         searchCashFlow: state.searchCashFlow
        //             ? deleteId(action.payload, state.searchCashFlow)
        //             : null
        //     }

        // Створює новий обєкт в cashFlow
        // case CREATE_NEW_CASH_FLOW_ITEM:
        //     return {
        //         ...state,
        //         cashFlow: CreateNewItem(state.cashFlow)
        //     }

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

// function CreateNewItem(cashFlow: ICashFlow[] | null) {
//     if (cashFlow !== null) {
//         const newItem: ICashFlow = {
//             checked: false,
//             dateBuy: new Date(),
//             id: Calc.lastIdFromCashFlow(cashFlow),
//             currency: "₴",
//             income: 0,
//             name: "Назва",
//             pcs: 1,
//             price: 0,
//             rate: "UAH"
//         }
//         return [newItem, ...cashFlow]
//     } else return cashFlow
// }

// function deleteId(arr: Array<number>, cashFlow: ICashFlow[] | null) {
//     if (cashFlow !== null) {
//         let delCashFlow = [...cashFlow]
//         arr.forEach((item: number) => {
//             delCashFlow = delCashFlow.filter((i: ICashFlow) => i.id !== item)
//         })
//         return delCashFlow
//     } else {
//         return cashFlow
//     }
// }

export default serverMoneyReducer
