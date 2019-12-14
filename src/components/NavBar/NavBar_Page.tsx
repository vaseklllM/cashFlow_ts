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
import { Calc } from "../../utils"
import { IValut } from "../../interfaces"
import "./NavBar.scss"
import LoaderCircle from "../Loader_Circle"
import Search from "../Search"

interface props {
    vallets: IValut[]
}

const NavBarPage = (props: props) => {
    const { vallets } = props
    let blockValute = (): JSX.Element | JSX.Element[] => <LoaderCircle />
    if (Object.keys(vallets).length !== 0) {
        const newValletst: IValut[] = vallets.filter(
            (i: IValut) => i.sumbol !== "₴"
        )
        blockValute = () =>
            newValletst.map((item: IValut, index: number) => {
                return (
                    <span key={index} className='circle'>
                        {`${item.sumbol} ${Calc.showNawBarPrice(item.value)}`}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                )
            })
    }
    return (
        <>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography className='title' variant='h6' noWrap>
                        <div>{blockValute()}</div>
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
                    <Hidden mdUp>MenuBtn</Hidden>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBarPage
