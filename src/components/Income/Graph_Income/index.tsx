import React from "react"
import { TCashFlow, IServerMoney } from "../../../interfaces"
import { connect } from "react-redux"
import { Typography, Grid } from "@material-ui/core"
import CreateGraph from "../../CreateGraph"
import { getIncome } from "../../../utils/getterCashFlow"

interface IProps {
    cashFlow: TCashFlow
    showtype?: "bar" | "pie"
    title?: string
}

const IncomeGraph = (props: IProps) => {
    const { cashFlow, showtype = "pie", title = "" } = props
    if (title !== "") {
        return (
            <Grid item xl={12}>
                <Typography
                    variant='h6'
                    style={{ textAlign: "center" }}
                    gutterBottom
                >
                    {title}
                </Typography>
                <CreateGraph
                    showtype={showtype}
                    array={getIncome(cashFlow)}
                    type='income'
                />
            </Grid>
        )
    } else {
        return (
            <Grid item xl={12}>
                <CreateGraph
                    showtype={showtype}
                    array={getIncome(cashFlow)}
                    type='income'
                />
            </Grid>
        )
    }
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(IncomeGraph)
