import React from "react"
import { Grid } from "@material-ui/core"
import TableFull from "./TableFull"

const Full = () => {
    return (
        <>
            <div className='range-horizontal' />
            <Grid container justify='space-between'>
                <Grid item container spacing={3}>
                    <Grid
                        item
                        xs={12}
                        lg={12}
                        xl={12}
                        alignItems='center'
                        container
                    >
                        <Grid item xl={12}>
                            <TableFull />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Full
export { TableFull }
