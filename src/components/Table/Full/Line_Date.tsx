import React, { Dispatch } from "react"
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
import { ICashFlow } from "../../../interfaces"
// import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
// import { IFullTable } from "../../../store/FullTable/interface"

interface IProps {
    item: ICashFlow
    onShow: boolean
    setNewCashFlowItem(value: any): void
}

// комірка з датою
const DateLine = (props: IProps) => {
    const { item, onShow, setNewCashFlowItem } = props

    const { dateBuy } = item
    const [selectedDate, setSelectedDate] = React.useState(new Date(dateBuy))

    setNewCashFlowItem({
        dateBuy: Calc.showDate(selectedDate, "-", true) || dateBuy
    })
    const handleDateChange = (date: any): void => {
        setSelectedDate(date)
    }

    if (!onShow) {
        return (
            <StyledTableCell align='right'>
                {Calc.showDate(dateBuy)}
            </StyledTableCell>
        )
    } else {
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
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "change date"
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            </StyledTableCell>
        )
    }
}

// interface IMapState{
//     fullTable: IFullTable
// }

// const mapStateToProps = ({fullTable}: IMapState)=>({
//     onShow: fullTable.onCheck
// })

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setNewCashFlowItem: (value: any) => dispatch(setNewCashFlowItem(value))
})

export default connect(undefined, mapDispatchToProps)(DateLine)
