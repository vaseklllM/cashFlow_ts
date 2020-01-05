import React from "react"
import { Grid, Container, Box } from "@material-ui/core"
import ProgressBarCapital from "../ProgressBar_Capital"
import ProgressBarincomeToCosts from "../ProgressBar_IncomeToCosts"
import "./style.scss"
import Income from "../Income"
import Costs from "../Costs"
import Capital from "../Capital"
import Active from "../Active"
import Pasive from "../Pasive"
import Full from "../Full"

const MainContainer: React.FC = () => {
    return (
        <>
            <Container maxWidth='xl'>
                <Box mt={10}>
                    <Grid item container spacing={3} xl={12}>
                        <Grid item xs={12} md={6} xl={6}>
                            <ProgressBarCapital />
                        </Grid>
                        <Grid item xs={12} md={6} xl={6}>
                            <ProgressBarincomeToCosts />
                        </Grid>
                    </Grid>
                </Box>
                <div className='range-horizontal' />
                <Income />
                <Costs />
                <Capital />
                <Active />
                <Pasive />
                <Full />
            </Container>
        </>
    )
}

export default MainContainer
