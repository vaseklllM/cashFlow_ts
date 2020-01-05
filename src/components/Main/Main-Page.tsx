import React from "react"
import { Grid, Container, Box, Typography } from "@material-ui/core"
import {
    TableActive,
    TableCapital,
    TableCosts,
    TableIncome,
    TablePasive,
    TableFull
} from "../Table"
import ProgressBarCapital from "../ProgressBar_Capital"
import ProgressBarincomeToCosts from "../ProgressBar_IncomeToCosts"
import "./style.scss"
import { GraphIncome, GraphCosts, GraphCapital } from "../Graphs"

const MainContainer: React.FC = () => {
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

                {/*----------------------------------------------------- Доходи -----------------------------------------------------*/}
                <Grid container justify='space-between'>
                    <Grid item container spacing={3}>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphIncome
                                showtype='bar'
                                title='Доходи в гривнях'
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphIncome title='Доходи в гривнях' />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                            container
                        >
                            <Grid item xl={12}>
                                <TableIncome />
                            </Grid>
                        </Grid>
                        {/* 
                        <Grid item xs={12} lg={12} xl={6}>
                            <TableActive />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={6}>
                            <TablePasive />
                        </Grid>
                        <Grid item xs={12} lg={12} xl={12}>
                            <TableFull />
                        </Grid> */}
                    </Grid>
                </Grid>
                <div className='range-horizontal' />

                {/*----------------------------------------------------- Витрати -----------------------------------------------------*/}
                <Grid container justify='space-between'>
                    <Grid item container spacing={3}>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphCosts
                                showtype='bar'
                                title='Витрати в гривнях'
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphCosts title='Витрати в гривнях' />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                            container
                        >
                            <Grid item xl={12}>
                                <TableCosts />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className='range-horizontal' />

                {/*----------------------------------------------------- Капитал -----------------------------------------------------*/}
                <Grid container justify='space-between'>
                    <Grid item container spacing={3}>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphCapital
                                showtype='bar'
                                title='Капитал в гривнях'
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphCapital title='Капитал в гривнях' />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                            container
                        >
                            <Grid item xl={12}>
                                <TableCapital />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className='range-horizontal' />

                {/*----------------------------------------------------- Активи -----------------------------------------------------*/}
                <Grid container justify='space-between'>
                    <Grid item container spacing={3}>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphCapital
                                showtype='bar'
                                title='Капитал в гривнях'
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                        >
                            <GraphCapital title='Капитал в гривнях' />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            lg={6}
                            xl={4}
                            alignItems='center'
                            container
                        >
                            <Grid item xl={12}>
                                <TableCapital />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className='range-horizontal' />
            </Container>
        </>
    )
}

export default MainContainer
