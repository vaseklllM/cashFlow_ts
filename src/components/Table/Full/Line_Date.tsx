import React, { Dispatch, Component } from "react"
import { connect } from "react-redux"
import "date-fns"
import { Calc } from "../../../utils"
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"
import { setNewCashFlowItem } from "../../../store/serverMoney/action"
import { StyledTableCell } from "../utils"
import { ICashFlow, IServerMoney, TRate, TCurrency } from "../../../interfaces"

interface ITempCashFlow {
    name?: string
    id?: number
    pcs?: number
    price?: number
    income?: number
    currency?: TCurrency
    rate?: TRate
    dateBuy?: string | Date
    checked?: boolean
}

interface IsetNewCashFlowItem {
    key: string
    value: string | number | Date
}

interface IProps {
    item: ICashFlow
    onShow: boolean
    setNewCashFlowItem(value: IsetNewCashFlowItem): void
    newCashFlowItem: ITempCashFlow
}

// комірка з датою
class LineDate extends Component<IProps> {
    shouldComponentUpdate(nextProps: IProps) {
        const { item, onShow, newCashFlowItem } = this.props
        if (
            newCashFlowItem.dateBuy !== nextProps.newCashFlowItem.dateBuy &&
            nextProps.newCashFlowItem.dateBuy &&
            onShow
        ) {
            return true
        } else if (
            onShow !== nextProps.onShow ||
            item.dateBuy !== nextProps.item.dateBuy
        ) {
            return true
        }
        return false
    }

    render() {
        const { item, onShow, setNewCashFlowItem, newCashFlowItem } = this.props

        const handleDateChange = (date: any): void => {
            if (date.toString() !== "Invalid Date") {
                setNewCashFlowItem({
                    key: "dateBuy",
                    value: date
                })
            }
        }

        if (onShow) {
            if (
                !newCashFlowItem.dateBuy ||
                newCashFlowItem.dateBuy.toString() === "Invalid Date"
            ) {
                setNewCashFlowItem({
                    key: "dateBuy",
                    value: item.dateBuy
                })
            }
            return (
                <StyledTableCell align='right' style={{ width: "10px" }}>
                    <div
                        onMouseDown={event => {
                            event.stopPropagation()
                        }}
                        style={{ width: "150px" }}
                    >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin='none'
                                id='date-picker-dialog'
                                format='dd/MM/yyyy'
                                value={newCashFlowItem.dateBuy}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    "aria-label": "change date"
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                </StyledTableCell>
            )
        } else {
            return (
                <StyledTableCell align='right'>
                    {Calc.showDate(item.dateBuy)}
                </StyledTableCell>
            )
        }
    }
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => {
    return {
        newCashFlowItem: serverMoney.newCashFlowItem
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setNewCashFlowItem: (value: any) => dispatch(setNewCashFlowItem(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(LineDate)
