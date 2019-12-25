import React from "react"
import { connect } from "react-redux"
import { StyledTableCell } from "../utils"
import { IconButton, TableHead, TableRow } from "@material-ui/core"
import AddBoxIcon from "@material-ui/icons/AddBox"
import { IFullBodyText } from "."
import { IFullTable } from "../../../store/FullTable/interface"
import Row_Delete from "./Row_Delete"

interface IProps {
    bodyText: IFullBodyText
    onCheck: number[]
}

function Row_Title(props: IProps) {
    const { bodyText, onCheck } = props

    const row = bodyText.collumn.map((item, index) => {
        if (index === 0) {
            return (
                <StyledTableCell key={index} style={{ paddingLeft: "11px" }}>
                    <IconButton
                        style={{ padding: "5px" }}
                        // onClick={() => this.createNewItem()}
                    >
                        <AddBoxIcon htmlColor='white' />
                    </IconButton>
                </StyledTableCell>
            )
        }
        if (index === 1) {
            return <StyledTableCell key={index}> {item}</StyledTableCell>
        }
        return (
            <StyledTableCell key={index} align='right'>
                {item}
            </StyledTableCell>
        )
    })
    // const Table_Row: JSX.Element[] | JSX.Element = 

    return (
        <TableHead>
            <TableRow>{onCheck.length === 0 ? row : <Row_Delete />}</TableRow>
        </TableHead>
    )
}

interface IMapState {
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    bodyText: fullTable.bodyText,
    onCheck: fullTable.onCheck
})

export default connect(mapStateToProps)(Row_Title)
