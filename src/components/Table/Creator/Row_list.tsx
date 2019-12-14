import React from "react"
import Loader_linear from "../../Loader_Linear"
import { TableBody } from "@material-ui/core"
import Row from "./Row"
import { StyledTableCell, StyledTableRow } from "../utils"

interface IProps {
    rows: string[][]
    emptyArray: string
    colSpan: number
    checked: number | null
    setCheckBox(id: number): void
}

const RowList = (props: IProps) => {
    const { rows, emptyArray, colSpan, checked, setCheckBox } = props

    const newRow: JSX.Element[] = rows.map((row, index) => {
        return (
            <Row
                key={index}
                row={row}
                checked={index === checked}
                setCheckBox={setCheckBox}
                id={index}
            />
        )
    })

    if (rows.length === 0) {
        return (
            <TableBody>
                <StyledTableRow>
                    <StyledTableCell
                        component='th'
                        scope='row'
                        colSpan={colSpan}
                    >
                        <Loader_linear />
                    </StyledTableCell>
                </StyledTableRow>
            </TableBody>
        )
    }
    return <TableBody>{newRow}</TableBody>
}

export default RowList
