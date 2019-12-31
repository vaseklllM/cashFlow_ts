import React from "react"
import { TCashFlow, IServerMoney } from "../../../interfaces"
import { connect } from "react-redux"
import { Typography } from "@material-ui/core"
import CreateGraph from "../../CreateGraph"
import { getterCashFlow } from "../../../utils"

interface IProps {
    cashFlow: TCashFlow
}

const IncomeGraph = (props: IProps) => {
    const { cashFlow } = props

    return (
        <>
            <Typography
                variant='h6'
                style={{ textAlign: "center" }}
                gutterBottom
            >
                Капитал
            </Typography>
            <CreateGraph
                array={getterCashFlow.getCapital(cashFlow)}
                type='fullPrice'
            />
        </>
    )
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(IncomeGraph)
