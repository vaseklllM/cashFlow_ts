import { IServerMoney, IAction } from "../../interfaces"
import { SET_CASH_FLOW, SET_VALLET_COURSE } from "./action"

const cashFlowState: IServerMoney = {
    searchCashFlow: null,
    cashFlow: null,
    vallets: [],
    newCashFlowItem: {}
}

const serverMoneyReducer = (
    state: IServerMoney = cashFlowState,
    action: IAction
): IServerMoney => {
    switch (action.type) {
        case SET_CASH_FLOW:
            return { ...state, cashFlow: action.payload }
        case SET_VALLET_COURSE:
            return { ...state, vallets: action.payload }
        default:
            return state
    }
}

export default serverMoneyReducer
