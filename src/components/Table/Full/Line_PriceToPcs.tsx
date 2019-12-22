import React from "react"
import InputLine from "./creators/Line_input"
import { Calc } from "../../../utils"
import { StyledTableCell } from "../utils"
import { ICashFlow } from "../../../interfaces"

interface IProps{
    item: ICashFlow
    onShow: boolean
}

// комірка "Ціна загалом"
const LinePriceToPcs = React.memo((props: IProps) => {
    const { item, onShow } = props
    if (onShow) {
        return (
            <InputLine
                value={item.price}
                keyName='price'
                width='11%'
                place='Ціна за шт.'
                ClassNameInputStyle='FullTableInput'
            />
        )
    } else
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {Calc.LC(item.price)}
            </StyledTableCell>
        )
})

export default LinePriceToPcs
