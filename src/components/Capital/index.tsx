import React from "react"
import { Grid } from "@material-ui/core"
import GraphCapital from "./GraphCapital"
import TableCapital from "./TableCapital"

const Capital = () => {
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
        </>
    )
}

export default Capital

export { GraphCapital, TableCapital }
