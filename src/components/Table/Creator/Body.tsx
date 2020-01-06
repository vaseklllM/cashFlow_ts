import React from "react"
import { Table, TableHead, TableRow, Paper } from "@material-ui/core"
import { StyledTableCell } from "../utils"
import { IBodyText } from "../interface"
import RowList from "./Row_list"

interface IBodyProps {
    text: IBodyText
    checked: number | null
    setCheckBox(id: number): void
    minWidth: string
}

const Body: React.FC<IBodyProps> = props => {
    const {
        text: { emptyArray, collumn, rows },
        checked,
        setCheckBox,
        minWidth
    } = props
    return (
        <Paper className='activeTable' style={{ maxHeight: "700px" }}>
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
                <RowList
                    rows={rows}
                    emptyArray={emptyArray}
                    colSpan={collumn.length}
                    checked={checked}
                    setCheckBox={setCheckBox}
                />
            </Table>
        </Paper>
    )
}

export default Body
