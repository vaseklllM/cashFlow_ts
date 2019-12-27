import { IAction } from "../../interfaces"
import {
    CLEAR_ON_CHECK_ARRAY,
    SET_EDIT_ELEMENT_ID,
    SET_ITEM_SELECTED_ID
} from "./action"
import { IFullTable } from "./interface"

const fullTableState: IFullTable = {
    onCheck: [],
    editElementId: undefined,
    bodyText: {
        title: "Вся таблиця",
        emptyArray: "Таблиця пуста",
        collumn: [
            "",
            "Назва",
            "Дата покупки",
            "Пройшло від покупки",
            "Ціна за шт.",
            "Кількість/шт.",
            "Доход/міс.",
            "Валюта",
            "Ціна загалом",
            "ROI/р."
        ]
    },
    itemSelectedId: []
}

function fullTableReducer(state = fullTableState, action: IAction) {
    switch (action.type) {
        case CLEAR_ON_CHECK_ARRAY:
            return {
                ...state,
                onCheck: []
            }

        case SET_EDIT_ELEMENT_ID:
            return {
                ...state,
                editElementId: action.payload
            }

        case SET_ITEM_SELECTED_ID:
            if (state.itemSelectedId.indexOf(action.payload) !== -1) {
                let tempArr = [...state.itemSelectedId]
                tempArr.splice(tempArr.indexOf(action.payload), 1)
                return {
                    ...state,
                    itemSelectedId: tempArr
                }
            } else {
                return {
                    ...state,
                    itemSelectedId: [...state.itemSelectedId, action.payload]
                }
            }

        default:
            return {
                ...state
            }
    }
}
export default fullTableReducer
