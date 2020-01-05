import React from "react"
import { Grid } from "@material-ui/core"
import GraphActive from "./GraphActive"
import TableActive from "./TableActive"

const Active = () => {
    return (
        <>
            <div className='range-horizontal' />
            <Grid container justify='space-between'>
                <Grid item container spacing={3}>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        xl={8}
                        alignItems='center'
                        container
                    >
                        <Grid item xl={12}>
                            <TableActive />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        lg={6}
                        xl={4}
                        alignItems='center'
                    >
                        <GraphActive showtype='bar' title='Активи в гривнях' />
                    </Grid>
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Active

export { GraphActive, TableActive }
