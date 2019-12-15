import React from "react"
import { TableBody, LinearProgress } from "@material-ui/core"
import Row from "./Row"
import { StyledTableCell, StyledTableRow } from "../utils"

interface IProps {
    rows: string[][] | "Loading..."
    emptyArray: string
    colSpan: number
    checked: number | null
    setCheckBox(id: number): void
}

const RowList = (props: IProps) => {
    const { rows, emptyArray, colSpan, checked, setCheckBox } = props

    let newRow: JSX.Element[] | JSX.Element = (
        <StyledTableRow>
            <StyledTableCell component='th' scope='row' colSpan={colSpan}>
                <div style={{ flexGrow: 1 }}>
                    <LinearProgress />
                </div>
            </StyledTableCell>
        </StyledTableRow>
    )
    if (rows !== "Loading..." && rows.length === 0) {
        newRow = (
            <StyledTableRow>
                <StyledTableCell component='th' scope='row' colSpan={colSpan}>
                    {emptyArray}
                </StyledTableCell>
            </StyledTableRow>
        )
    } else if (rows !== "Loading..." && rows.length > 0) {
        newRow = rows.map((row, index) => {
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
    }

    return <TableBody>{newRow}</TableBody>
}

export default RowList
