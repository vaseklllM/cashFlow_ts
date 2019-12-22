import { combineReducers } from "redux"
import serverMoney from "./serverMoney/reducer"
import fullTable from './FullTable/reducer';

export default combineReducers({
    serverMoney, fullTable
})
