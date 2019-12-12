import React from "react"
import { connect } from "react-redux"
import { IServerMoney, ICashFlow } from "../../interfaces"

interface IProps {
    cashFlow: ICashFlow[] | null
}

// Таблиця активів
function ActiveTable(props: IProps) {
    const { cashFlow } = props
    // console.log(cashFlow)
    return <div></div>
}

interface IRootState {
    serverMoney: IServerMoney
}

const mapStateToProps = (state: IRootState) => {
    const { serverMoney } = state
    return {
        cashFlow: serverMoney.cashFlow
    }
}
    
export default connect(mapStateToProps)(ActiveTable)
