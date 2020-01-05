import React from "react"
import { TCashFlow, IServerMoney } from "../../../interfaces"
import { connect } from "react-redux"
import { Typography, Grid } from "@material-ui/core"
import CreateGraph from "../../CreateGraph"
import { getActive } from "../../../utils/getterCashFlow"

interface IProps {
    cashFlow: TCashFlow
    showtype?: "bar" | "pie"
}

const IncomeGraph = (props: IProps) => {
    const { cashFlow, showtype = "pie" } = props

    return (
        <Grid item xl={12}>
            <Typography
                variant='h6'
                style={{ textAlign: "center" }}
                gutterBottom
            >
                Активи
            </Typography>
            <CreateGraph
                showtype={showtype}
                array={getActive(cashFlow)}
                type='fullPrice'
            />
        </Grid>
    )
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(IncomeGraph)
