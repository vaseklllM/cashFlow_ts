import React from "react"
import { Grid, Hidden } from "@material-ui/core"
import GraphActive from "./GraphActive"
import TableActive from "./TableActive"

const Active = () => {
    return (
        <>
            <div className='range-horizontal' />
            <Grid container justify='space-between'>
                <Grid item container spacing={3}>
                    <Hidden lgDown>
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
                            <GraphActive
                                showtype='bar'
                                title='Активи в гривнях'
                            />
                        </Grid>
                    </Hidden>
                    <Hidden xlUp>
                        <Hidden xsDown>
                            <Grid
                                item
                                container
                                xs={12}
                                alignItems='center'
                                justify='center'
                            >
                                <GraphActive
                                    showtype='bar'
                                    title='Активи в гривнях'
                                />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} alignItems='center' container>
                            <TableActive />
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <div className='range-horizontal' />
        </>
    )
}

export default Active

export { GraphActive, TableActive }
