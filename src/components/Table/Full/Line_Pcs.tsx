import React from "react"
import InputLine from "./creators/Line_input"
import { Calc } from "../../../utils"
import { StyledTableCell } from "../utils"
import { ICashFlow } from "../../../interfaces"

interface IProps {
    item: ICashFlow
    onShow: boolean
}
// комірка з кількістю шт.
const PcsLine = React.memo((props: IProps) => {
    const { item, onShow } = props
    if (onShow) {
        return (
            <InputLine
                value={item.pcs}
                keyName='pcs'
                width='11%'
                place='Кількість'
                ClassNameInputStyle='FullTableInput'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {Calc.LC(item.pcs, ' шт.')}
            </StyledTableCell>
        )
})

export default PcsLine
