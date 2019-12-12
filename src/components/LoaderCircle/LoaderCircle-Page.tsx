import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        progress: {
            marginLeft: theme.spacing(0)
        }
    })
)

const LoaderPage = () => {
    const classes = useStyles()
    return (
        <div>
            <CircularProgress className={classes.progress} color='inherit' />
        </div>
    )
}

export default LoaderPage
