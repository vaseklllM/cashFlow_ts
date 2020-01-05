import React from "react"
import { TCashFlow, IServerMoney, TSearchCashFlow } from "../../../interfaces"
import { connect } from "react-redux"
import { Typography, Grid } from "@material-ui/core"
import CreateGraph from "../../CreateGraph"
import { getPassive } from "../../../utils/getterCashFlow"

interface IProps {
    cashFlow: TCashFlow
    showtype?: "bar" | "pie"
    title?: string
    searchCashFlow: TSearchCashFlow
}

const IncomeGraph = (props: IProps) => {
    const { cashFlow, showtype = "pie", title = "", searchCashFlow } = props
    let mainArray: TCashFlow = cashFlow
    if (Array.isArray(searchCashFlow)) {
        mainArray = searchCashFlow
    }

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
                    array={getPassive(mainArray)}
                    type='fullPrice'
                />
            </Grid>
        )
    } else {
        return (
            <Grid item xl={12}>
                <CreateGraph
                    showtype={showtype}
                    array={getPassive(mainArray)}
                    type='fullPrice'
                />
            </Grid>
        )
    }
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    cashFlow: serverMoney.cashFlow,
    searchCashFlow: serverMoney.searchCashFlow
})

export default connect(mapStateToProps)(IncomeGraph)
