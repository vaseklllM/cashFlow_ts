import React from "react"
import { AppBar, Toolbar, Typography, Box, Hidden } from "@material-ui/core"
import "./NavBar.scss"
import Search from "../Search"
import ValutsText from "./Valuts_Text"

const NavBarPage: React.FC = () => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography className='title' variant='h6' noWrap>
                    <ValutsText />
                </Typography>
                <Hidden xsDown>
                    <Box mr={2}>
                        <Search />
                    </Box>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default NavBarPage
