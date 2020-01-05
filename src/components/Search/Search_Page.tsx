import React, { ChangeEvent, Dispatch, KeyboardEvent, createRef } from "react"
import { InputBase } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import { createStyles, fade, Theme, makeStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { searchCashFlowAction } from "../../store/serverMoney/action"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        menuButton: {
            marginRight: theme.spacing(2)
        },
        title: {
            flexGrow: 1,
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block"
            }
        },
        search: {
            position: "relative",
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            "&:hover": {
                backgroundColor: fade(theme.palette.common.white, 0.25)
            },
            marginLeft: 0,
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                marginLeft: theme.spacing(1),
                width: "auto"
            }
        },
        searchIcon: {
            width: theme.spacing(7),
            height: "100%",
            position: "absolute",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        inputRoot: {
            color: "inherit"
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("sm")]: {
                width: 120,
                "&:focus": {
                    width: 200
                }
            }
        }
    })
)

interface IProps {
    searchCashFlowAction(newCashFlow: string): void
}

const SearchPage: React.FC<IProps> = props => {
    let textInput = createRef<HTMLDivElement>()
    const { searchCashFlowAction } = props
    const classes = useStyles("")
    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === "") {
            searchCashFlowAction("")
        }
    }

    const searchOnPressEnter = (event: KeyboardEvent) => {
        if (event.key === "Enter" && textInput.current) {
            const input = textInput.current.querySelector("input")
            if (input && input.value !== "") {
                searchCashFlowAction(input.value)
            }
        }
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder='Search…'
                ref={textInput}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                onKeyDown={searchOnPressEnter}
                onChange={onChangeValue}
                inputProps={{ "aria-label": "search" }}
            />
        </div>
    )
}

const MapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        searchCashFlowAction: (newCashFlow: string) =>
            dispatch(searchCashFlowAction(newCashFlow))
    }
}

export default connect(null, MapDispatchToProps)(SearchPage)
