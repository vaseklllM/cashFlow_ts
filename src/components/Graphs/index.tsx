import React from "react"
import { Grid, Box, Container, Typography } from "@material-ui/core"
import CreateGraph from "../Graph_Creator"
import { TCashFlow, IServerMoney } from "../../interfaces"
import { connect } from "react-redux"

interface IProps {
    cashFlow: TCashFlow
}

const Graphs = (props: IProps) => {
    const { cashFlow } = props
    let incomeData: TCashFlow = "Loading..."
    if (Array.isArray(cashFlow)) {
        incomeData = cashFlow.filter(i => i.income > 0)
    }

    return (
        <Container maxWidth='xl'>
            <Box mt={10}>
                <Grid container spacing={3}>
                    <Grid item xl={4} md={6} xs={12}>
                        <Typography
                            variant='h6'
                            style={{ textAlign: "center" }}
                            gutterBottom
                        >
                            Доходи
                        </Typography>

                        <CreateGraph
                            array={incomeData}
                            type='income'
                            name='incomeGraph'
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    cashFlow: serverMoney.cashFlow
})

export default connect(mapStateToProps)(Graphs)
