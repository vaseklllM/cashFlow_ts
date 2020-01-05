import React from "react"
import { Grid, Box, Container } from "@material-ui/core"
import GraphIncome from "./Graph_Income"
import GraphCosts from "./Graph_Costs"
import GraphActive from "./Graph_Active"
import GraphCapital from "./Graph_Capital"

const GraphsPage = () => {
    return (
        <Container maxWidth='xl'>
            <Box mt={10}>
                <Grid container spacing={3}>
                    <Grid item xl={4} md={6} xs={12}>
                        <GraphIncome />
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <GraphCosts />
                    </Grid>
                    <Grid item xl={4} md={6} xs={12}>
                        <GraphActive />
                    </Grid>
                </Grid>
            </Box>
            <div className='range-horizontal' />
            <Box mt={1}>
                <Grid container spacing={3}>
                    <Grid item xl={4} md={6} xs={12}>
                        <GraphCapital />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default GraphsPage

export { GraphIncome, GraphCosts, GraphCapital, GraphActive }
