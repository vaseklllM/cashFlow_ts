import React from "react"
import { Grid, Hidden } from "@material-ui/core"
import GraphCosts from "./GraphCosts"
import TableCosts from "./TableCosts"

const Costs = () => {
    return (
        <>
            <div className='range-horizontal' />
            <Grid container justify='space-between'>
                <Grid item container spacing={3}>
                    <Hidden xsDown>
                        <Grid
                            item
                            container
                            sm={12}
                            md={6}
                            xl={4}
                            alignItems='center'
                            justify='center'
                        >
                            <GraphCosts
                                showtype='bar'
                                title='Витрати в гривнях'
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            sm={12}
                            md={6}
                            xl={4}
                            alignItems='center'
                            justify='center'
                        >
                            <GraphCosts title='Витрати в гривнях' />
                        </Grid>
                    </Hidden>
                    <Grid
                        item
                        sm={12}
                        md={12}
                        xl={4}
                        alignItems='center'
                        container
                    >
                        <Grid item xs={12}>
                            <TableCosts />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Costs

export { GraphCosts, TableCosts }
