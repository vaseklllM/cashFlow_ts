import React from "react"
import { Grid } from "@material-ui/core"
import TableFull from "./TableFull"

const Full = () => {
    return (
        <>
            <div className='range-horizontal' />
            <Grid container justify='space-between'>
                <Grid item container spacing={3}>
                    <Grid item xs={12} alignItems='center' container>
                        <TableFull />
                    </Grid>
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Full
export { TableFull }
