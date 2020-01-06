import React from "react"
import { Grid, Hidden } from "@material-ui/core"
import GraphIncome from "./Graph_Income"
import TableIncome from "./TableIncome"

const Income = () => {
    return (
        <>
            <Grid container justify='space-between'>
                <Grid item container spacing={3}>
                    <Hidden xsDown>
                        <Grid
                            item
                            container
                            xs={12}
                            sm={12}
                            md={6}
                            xl={4}
                            alignItems='center'
                            justify='center'
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
                            sm={12}
                            md={6}
                            xl={4}
                            alignItems='center'
                            justify='center'
                        >
                            <GraphIncome title='Доходи в гривнях' />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={4}
                        alignItems='center'
                        container
                    >
                        <Grid item xs={12}>
                            <TableIncome />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Income

export { GraphIncome, TableIncome }
