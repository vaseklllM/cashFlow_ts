import React from "react"
import { Grid } from "@material-ui/core"
import GraphIncome from "./Graph_Income"
import TableIncome from "./TableIncome"

const Income = () => {
    return (
        <>
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
                        <GraphIncome showtype='bar' title='Доходи в гривнях' />
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
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Income

export { GraphIncome, TableIncome }
