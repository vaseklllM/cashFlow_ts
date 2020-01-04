import React from "react"
import { Link } from "react-router-dom"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Hidden
} from "@material-ui/core"
import "./NavBar.scss"
import Search from "../Search"
import Valuts from "./Valuts_Text"
import MobileButtons from "./MobileButtons"

const NavBarPage: React.FC = () => {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Typography className='title' variant='h6' noWrap>
                    <div>
                        <Valuts />
                    </div>
                </Typography>
                <Hidden smDown>
                    <Box mr={2}>
                        <Search />
                    </Box>
                </Hidden>
                <Hidden smDown>
                    <Box mr={2}>
                        <Link to='/' className='NavLinkbtn'>
                            <Button color='inherit'>Головна</Button>
                        </Link>
                    </Box>
                    <Box mr={2}>
                        <Link to='/graphs' className='NavLinkbtn'>
                            <Button color='inherit'>Графіки</Button>
                        </Link>
                    </Box>
                </Hidden>
                <Hidden mdUp>
                    <MobileButtons />
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default NavBarPage
