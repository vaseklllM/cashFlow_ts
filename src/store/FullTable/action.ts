import { IAction } from "../../interfaces"

export const CLEAR_ON_CHECK_ARRAY: string = "CLEAR_ON_CHECK_ARRAY"
export const SET_EDIT_ELEMENT_ID: string = "SET_EDIT_ELEMENT_ID"

export const clearOnCheck = (): IAction => ({
    type: CLEAR_ON_CHECK_ARRAY
})

export const setEditElementId = (id: number | undefined): IAction => ({
    type: SET_EDIT_ELEMENT_ID,
    payload: id
})
