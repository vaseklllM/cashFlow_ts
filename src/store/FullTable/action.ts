import { IAction } from "../../interfaces"

export const CLEAR_ON_CHECK_ARRAY: string = "CLEAR_ON_CHECK_ARRAY"

export const clearOnCheck = (): IAction => ({
    type: CLEAR_ON_CHECK_ARRAY
})
