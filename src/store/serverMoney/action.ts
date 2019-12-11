import { ICashFlow, IValut } from "../../components/interfaces"

export const SET_CASH_FLOW: string = "SET_CASH_FLOW"
export const SET_VALLET_COURSE: string = "SET_VALLET_COURSE"
export const SET_CASH_FLOW_CHACKBOX: string = "SET_CASH_FLOW_CHACKBOX"
export const SET_NEW_CASH_FLOW_ITEM: string = "SET_NEW_CASH_FLOW_ITEM"
export const CHANGE_PARAMETRS_CASH_FLOW: string = "CHANGE_PARAMETRS_CASH_FLOW"
export const SEARCH_CASH_FLOW: string = "SEARCH_CASH_FLOW"
export const ON_DELETE_CASH_FLOW_ITEM: string = "ON_DELETE_CASH_FLOW_ITEM"
export const CREATE_NEW_CASH_FLOW_ITEM: string = "CREATE_NEW_CASH_FLOW_ITEM"

interface action {
    type: string
    payload?: any
}

export const getCashFlow = (cashFlow: ICashFlow[]): action => ({
    type: SET_CASH_FLOW,
    payload: cashFlow
})

export const getVallet = (vallets: IValut[]): action => ({
    type: SET_VALLET_COURSE,
    payload: vallets
})

// export const setCheckBox = index => ({
//     type: SET_CASH_FLOW_CHACKBOX,
//     payload: index
// })
// export const setNewCashFlowItem = value => ({
//     type: SET_NEW_CASH_FLOW_ITEM,
//     payload: value
// })
// export const changeParametersCashFlow = itemId => ({
//     type: CHANGE_PARAMETRS_CASH_FLOW,
//     payload: itemId
// })
// export const searchCashFlowAction = newCashFlow => ({
//     type: SEARCH_CASH_FLOW,
//     payload: newCashFlow
// })
// export const onDeleteCashFlowItem = itemId => ({
//     type: ON_DELETE_CASH_FLOW_ITEM,
//     payload: itemId
// })
// export const createNewCashFlowItem = () => ({
//     type: CREATE_NEW_CASH_FLOW_ITEM
// })