import React from "react"
import { StyledTableRow, StyledTableCell } from "../utils"
import { Calc } from "../../../utils"

interface IProps {
    row: string[]
    checked: boolean
    setCheckBox(id: number): void
    id: number
}

class Row extends React.Component<IProps> {
    shouldComponentUpdate(nextProps: IProps) {
        const { checked, row } = this.props
        if (checked !== nextProps.checked) return true
        if (!Calc.deepEqual(row, nextProps.row)) return true
        return false
    }

    render() {
        const { row, checked, setCheckBox, id } = this.props
        return (
            <StyledTableRow
                hover
                style={
                    checked ? { backgroundColor: "rgba(0, 0, 0, 0.15)" } : {}
                }
                onClick={() => {
                    setCheckBox(id)
                }}
            >
                {row.map((item: string, index: number) => {
                    if (index === 0) {
                        return (
                            <StyledTableCell
                                key={index}
                                component='th'
                                scope='row'
                            >
                                {item}
                            </StyledTableCell>
                        )
                    }
                    return (
                        <StyledTableCell key={index} align='right'>
                            {item}
                        </StyledTableCell>
                    )
                })}
            </StyledTableRow>
        )
    }
}

export default Row
