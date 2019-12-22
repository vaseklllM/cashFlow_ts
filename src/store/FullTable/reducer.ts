import { IAction } from "../../interfaces"
import { CLEAR_ON_CHECK_ARRAY } from "./action"
import { IFullTable } from "./interface"

const fullTableState: IFullTable = {
    onCheck: [],
    editElementId: null,
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

        default:
            return {
                ...state
            }
    }
}
export default fullTableReducer
