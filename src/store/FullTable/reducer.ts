import { IAction } from "../../interfaces"
import { CLEAR_ON_CHECK_ARRAY, SET_EDIT_ELEMENT_ID } from "./action"
import { IFullTable } from "./interface"

const fullTableState: IFullTable = {
    onCheck: [],
    editElementId: 1,
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
    }
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

        default:
            return {
                ...state
            }
    }
}
export default fullTableReducer
