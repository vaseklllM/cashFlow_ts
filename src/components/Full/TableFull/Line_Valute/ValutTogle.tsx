import React, { Dispatch } from "react"
import {
    InputBase,
    Select,
    FormControl,
    MenuItem,
    Theme
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { connect } from "react-redux"
import { setNewCashFlowItem } from "../../../../store/serverMoney/action"
import { TValut, ICashFlow, IServerMoney } from "../../../../interfaces"
import { INewCashFlowItem, IsetNewCashFlowItem } from "../../../Table/interface"

// Styles --------------------
const BootstrapInput = withStyles((theme: Theme) => ({
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 14,
        padding: "5px 18px 5px 8px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
        }
    }
}))(InputBase)

interface IProps {
    item: ICashFlow
    vallets: TValut
    newCashFlowItem: INewCashFlowItem
    setNewCashFlowItem(value: IsetNewCashFlowItem): void
}

class Line extends React.Component<IProps> {
    componentDidMount() {
        const { setNewCashFlowItem, item } = this.props
        setNewCashFlowItem({ key: "rate", value: item.rate })
    }

    render() {
        const {
            vallets,
            newCashFlowItem,
            setNewCashFlowItem,
            item
        } = this.props
        const handleChange = (event: any): void => {
            setNewCashFlowItem({ key: "rate", value: event.target.value })
        }

        if (Array.isArray(vallets)) {
            return (
                <FormControl>
                    <Select
                        onMouseDown={event => {
                            event.stopPropagation()
                        }}
                        id='demo-customized-select'
                        value={newCashFlowItem.rate || item.rate}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        {vallets.map(item => {
                            return (
                                <MenuItem key={item.cc} value={item.cc}>
                                    {item.sumbol
                                        ? `${item.cc} "${item.sumbol}"`
                                        : item.cc}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            )
        } else {
            return <div></div>
        }
    }
}

interface IMapState {
    serverMoney: IServerMoney
}

const MapStateToProps = ({ serverMoney }: IMapState) => ({
    vallets: serverMoney.vallets,
    newCashFlowItem: serverMoney.newCashFlowItem
})

const MapDospatchToProps = (dispatch: Dispatch<any>) => ({
    setNewCashFlowItem: (value: any) => dispatch(setNewCashFlowItem(value))
})

export default connect(MapStateToProps, MapDospatchToProps)(Line)
