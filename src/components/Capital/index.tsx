import React from "react"
import { Grid, Hidden } from "@material-ui/core"
import GraphCapital from "./GraphCapital"
import TableCapital from "./TableCapital"

const Capital = () => {
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
                            <GraphCapital
                                showtype='bar'
                                title='Капитал в гривнях'
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
                            <GraphCapital title='Капитал в гривнях' />
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
