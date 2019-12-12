import React from "react"
import { connect } from "react-redux"
import { IServerMoney, ICashFlow } from "../../interfaces"

interface IProps {
    cashFlow: ICashFlow[] | null
    searchCashFlow: ICashFlow[] | null
}

// Таблиця активів
function ActiveTable({ cashFlow, searchCashFlow }: IProps) {
    // console.log(cashFlow)
    return <div></div>
}

interface IRootState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IRootState) => {
    return {
        cashFlow: serverMoney.cashFlow,
        searchCashFlow: serverMoney.searchCashFlow
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         setCheckBox: index => dispatch(setCheckBox(index))
//     }
// }

export default connect(mapStateToProps)(ActiveTable)
