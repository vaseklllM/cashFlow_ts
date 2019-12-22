import React from "react"
import InputLine from "./creators/Line_input"
import { Calc } from "../../../utils"
import { StyledTableCell } from "../utils"
import { ICashFlow } from "../../../interfaces"

interface IProps {
    item: ICashFlow
    onShow: boolean
}

// комірка з Доходом
const IncomeLine = React.memo((props: IProps) => {
    const { item, onShow } = props

    if (onShow) {
        return (
            <InputLine
                value={item.income}
                keyName='income'
                width='10%'
                place='Доход'
                ClassNameInputStyle='FullTableInput'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {Calc.LC(item.income, " " + item.currency)}
            </StyledTableCell>
        )
})

export default IncomeLine
