import React from "react"
import { Table, TableBody, TableHead, TableRow, Paper } from "@material-ui/core"
import { StyledTableCell } from "../utils"
import { ITableCreatorBodyText } from "../../../interfaces"

interface IBodyProps {
    rows: string[][]
    text: ITableCreatorBodyText
    checked: number | null
    setCheckBox(id: number): void
    minWidth: string
}

const Body = (props: IBodyProps) => {
    const {
        rows,
        text: { emptyArray, collumn },
        checked,
        setCheckBox,
        minWidth
    } = props
    return (
        <Paper className='activeTable' style={{ maxHeight: "800px" }}>
            <Table style={{ minWidth: minWidth }}>
                <TableHead className='vasekTest'>
                    <TableRow>
                        {collumn.map((item, index) => {
                            if (index === 0)
                                return (
                                    <StyledTableCell key={index}>
                                        {item}
                                    </StyledTableCell>
                                )
                            return (
                                <StyledTableCell key={index} align='right'>
                                    {item}
                                </StyledTableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rowList(
                        rows,
                        emptyArray,
                        collumn.length,
                        checked,
                        setCheckBox
                    )} */}
                </TableBody>
            </Table>
        </Paper>
    )
}

export default Body
