import React from "react"
import ValutTogle from "./ValutTogle"
import { ICashFlow } from "../../../../interfaces"
import { StyledTableCell } from "../../utils"

interface IProps {
    item: ICashFlow
    onShow: boolean
}

const ValuteLine = React.memo((props: IProps) => {
    const { item, onShow } = props
    if (onShow) {
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                <ValutTogle item={item} /> {/* форма вибoру валюти */}
            </StyledTableCell>
        )
    } else {
        return (
            <StyledTableCell className={onShow ? "activeTd" : ""} align='right'>
                {`${item.rate} "${item.currency}"`}
            </StyledTableCell>
        )
    }
})

export default ValuteLine
