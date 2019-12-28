import React, { Dispatch } from "react"
import { StyledTableCell } from "../utils"
import { Grid, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { connect } from "react-redux"
import { IFullTable } from "../../../store/FullTable/interface"
import { clearItemSelectedId } from "../../../store/FullTable/action"
import { deleteItemsFromCashFlow } from "../../../store/serverMoney/action"
import { IFullBodyText } from "."

interface IProps {
    bodyText: IFullBodyText
    itemSelectedId: number[]
    deleteItemsFromCashFlow(ItemsId: number[]): void
    clearItemSelectedId(): void
}

const RowDelete = (props: IProps) => {
    const {
        clearItemSelectedId,
        deleteItemsFromCashFlow,
        itemSelectedId,
        bodyText
    } = props
    return (
        <StyledTableCell
            align='left'
            colSpan={bodyText.collumn.length}
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
                <span>Вибрано: {itemSelectedId.length}</span>
                <IconButton
                    style={{ padding: "5px" }}
                    onClick={() => {
                        deleteItemsFromCashFlow(itemSelectedId)
                        clearItemSelectedId()
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
    itemSelectedId: fullTable.itemSelectedId,
    bodyText: fullTable.bodyText
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    deleteItemsFromCashFlow: (ItemsId: number[]) =>
        dispatch(deleteItemsFromCashFlow(ItemsId)),
    clearItemSelectedId: () => dispatch(clearItemSelectedId())
})

export default connect(mapStateToProps, mapDispatchToProps)(RowDelete)
