import React from "react"
import { Grid } from "@material-ui/core"
import GraphCosts from "./GraphCosts"
import  TableCosts  from "./TableCosts"

const Costs = () => {
    return (
        <>
            <div className='range-horizontal' />
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
                        <GraphCosts showtype='bar' title='Витрати в гривнях' />
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
        </>
    )
}

export default Costs

export { GraphCosts, TableCosts }
