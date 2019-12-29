import { ICashFlow, IValut } from "../../interfaces"

export const SET_CASH_FLOW: string = "SET_CASH_FLOW"
export const SET_VALLET_COURSE: string = "SET_VALLET_COURSE"
export const SET_CASH_FLOW_CHACKBOX: string = "SET_CASH_FLOW_CHACKBOX"
export const EDIT_NEW_CASH_FLOW_ITEM: string = "EDIT_NEW_CASH_FLOW_ITEM"
export const CHANGE_PARAMETRS_CASH_FLOW: string = "CHANGE_PARAMETRS_CASH_FLOW"
export const SEARCH_CASH_FLOW: string = "SEARCH_CASH_FLOW"
export const ON_DELETE_CASH_FLOW_ITEM: string = "ON_DELETE_CASH_FLOW_ITEM"
export const CREATE_NEW_CASH_FLOW_ITEM: string = "CREATE_NEW_CASH_FLOW_ITEM"
export const CLEAR_NEW_CASH_FLOW_ITEM: string = "CLEAR_NEW_CASH_FLOW_ITEM"
export const DELETE_ITEMS_FROM_CASH_FLOW: string = "DELETE_ITEMS_FROM_CASH_FLOW"

interface action {
    type: string
    payload?: any
}

export const deleteItemsFromCashFlow = (ItemsId: number[]): action => ({
    type: DELETE_ITEMS_FROM_CASH_FLOW,
    payload: ItemsId
})

export const clearNewCashFlowItem = (): action => ({
    type: CLEAR_NEW_CASH_FLOW_ITEM
})

export const getCashFlow = (cashFlow: ICashFlow[]): action => ({
    type: SET_CASH_FLOW,
    payload: cashFlow
})

export const getVallet = (vallets: IValut[]): action => ({
    type: SET_VALLET_COURSE,
    payload: vallets
})

export const setCheckBox = (index: number): action => ({
    type: SET_CASH_FLOW_CHACKBOX,
    payload: index
})
export const searchCashFlowAction = (newCashFlow: string): action => ({
    type: SEARCH_CASH_FLOW,
    payload: newCashFlow
})
export const setNewCashFlowItem = (value: object): action => ({
    type: EDIT_NEW_CASH_FLOW_ITEM,
    payload: value
})
export const changeParametersCashFlow = (id: number): action => ({
    type: CHANGE_PARAMETRS_CASH_FLOW,
    payload: id
})
export const onDeleteCashFlowItem = (itemId: any): action => ({
    type: ON_DELETE_CASH_FLOW_ITEM,
    payload: itemId
})
export const createNewCashFlowItem = (id: number): action => ({
    type: CREATE_NEW_CASH_FLOW_ITEM,
    payload: id
})
