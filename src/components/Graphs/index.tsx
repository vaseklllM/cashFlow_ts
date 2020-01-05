import React from "react"
import { Grid, Box, Container } from "@material-ui/core"
import {GraphIncome} from "../Income"
import {GraphCosts} from "../Costs"
import { GraphCapital } from "../Capital"
import { GraphActive } from "../Active"

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

