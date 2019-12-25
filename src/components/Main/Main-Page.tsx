import React from "react"
import { Grid, Container, Box } from "@material-ui/core"
import {
    // ActiveTable,
    // IncomeTable,
    // CostsTable,
    // CapitalTable,
    // PasiveTable,
    FullTable
} from "../Table"
import ProgressBarCapital from "../ProgressBar_Capital"
import ProgressBarincomeToCosts from "../ProgressBar_IncomeToCosts"
import "./style.scss"

const MainContainer = () => {
    return (
        <>
            <Container maxWidth='xl'>
                <Box mt={10}>
                    <Grid item container spacing={3} xl={12}>
                        <Grid item xs={12} md={6} xl={6}>
                            <ProgressBarCapital />
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <ProgressBarincomeToCosts />
                        </Grid>
                    </Grid>
                </Box>
                <div className='range-horizontal' />
                <Grid container justify='space-between'>
                    <Grid item container spacing={3}>
                        {/* <Grid item xs={12} lg={6} xl={4}>
                            <IncomeTable />
                        </Grid>
                        <Grid item xs={12} lg={6} xl={4}>
                            <CostsTable />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={4}>
                            <CapitalTable />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={6}>
                            <ActiveTable />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={6}>
                            <PasiveTable />
                        </Grid> */}
                        <Grid item xs={12} lg={12} xl={12}>
                            <FullTable />
                        </Grid>
                    </Grid>
                </Grid>
                <div className='range-horizontal' />
            </Container>
        </>
    )
}

export default MainContainer
