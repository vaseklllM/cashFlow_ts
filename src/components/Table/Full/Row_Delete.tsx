import React, { Dispatch } from "react"
import { StyledTableCell } from "../utils"
import { Grid, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { connect } from "react-redux"
import { IFullTable } from "../../../store/FullTable/interface"
import { clearOnCheck } from "../../../store/FullTable/action"

interface IState {
    onCheck: number[]
    clearOnCheck(): void
}

const RowDelete = ({ onCheck, clearOnCheck }: IState) => {
    return (
        <StyledTableCell
            align='left'
            // colSpan={bodyText.collumn.length}
            style={{
                backgroundColor: "rgb(250, 224, 233)",
                color: "rgb(220, 0, 78)"
            }}
        >
            <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'
            >
                <span>Вибрано: {onCheck.length}</span>
                <IconButton
                    style={{ padding: "5px" }}
                    onClick={() => {
                        // onDeleteCashFlowItem(onCheck)
                        clearOnCheck()
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </StyledTableCell>
    )
}

interface IMapState {
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    onCheck: fullTable.onCheck
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    clearOnCheck: () => dispatch(clearOnCheck)
})

export default connect(mapStateToProps, mapDispatchToProps)(RowDelete)
