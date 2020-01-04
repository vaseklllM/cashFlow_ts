import React, { MouseEvent } from "react"
import { Menu, MenuItem, IconButton } from "@material-ui/core"
import { Link } from "react-router-dom"
import MenuIcon from "@material-ui/icons/Menu"

type TState = {}

class MobileButtons extends React.Component<{}, TState> {
    state = {
        active: null
    }

    handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        this.setState({ active: event.currentTarget })
    }

    handleClose = (): void => {
        this.setState({ active: null })
    }

    linkStyle = {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.87)"
    }

    render() {
        const { active } = this.state
        return (
            <>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    onClick={this.handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id='simple-menu'
                    anchorEl={active}
                    keepMounted
                    open={Boolean(active)}
                    onClose={this.handleClose}
                >
                    <Link style={this.linkStyle} to='/'>
                        <MenuItem onClick={this.handleClose}>Головна</MenuItem>
                    </Link>
                    <Link style={this.linkStyle} to='/graphs'>
                        <MenuItem onClick={this.handleClose}>Графіки</MenuItem>
                    </Link>
                </Menu>
            </>
        )
    }
}

export default MobileButtons
