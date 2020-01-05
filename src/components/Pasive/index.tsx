import React from "react"
import { Grid } from "@material-ui/core"
import { TablePasive } from "../Table"
import GraphPasive from "./GraphPasive"

const Pasive = () => {
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
                            <TablePasive />
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
                        <GraphPasive showtype='bar' title='Пасиви в гривнях' />
                    </Grid>
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Pasive
export { GraphPasive }
