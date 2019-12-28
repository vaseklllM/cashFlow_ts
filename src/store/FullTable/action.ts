import { IAction } from "../../interfaces"

export const SET_EDIT_ELEMENT_ID: string = "SET_EDIT_ELEMENT_ID"
export const SET_ITEM_SELECTED_ID: string = "SET_ITEM_SELECTED_ID"
export const CLEAR_ITEM_SELECTED_ID: string = "CLEAR_ITEM_SELECTED_ID"

export const setEditElementId = (id: number | undefined): IAction => ({
    type: SET_EDIT_ELEMENT_ID,
    payload: id
})

export const setItemSelectedId = (id: number): IAction => ({
    type: SET_ITEM_SELECTED_ID,
    payload: id
})

export const clearItemSelectedId = (): IAction => ({
    type: CLEAR_ITEM_SELECTED_ID
})
