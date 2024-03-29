import React, { Dispatch } from "react"
import { IconButton } from "@material-ui/core"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import { connect } from "react-redux"
import { changeParametersCashFlow, clearNewCashFlowItem } from "../../../../store/serverMoney/action"
import { setEditElementId } from "../../../../store/FullTable/action"
import { IFullTable } from "../../../../store/FullTable/interface"

interface IState {
    setEditElementId(id: number | undefined): void
    changeParametersCashFlow(id: number): void
    editElementId: number | undefined
    clearNewCashFlowItem(): void
}

const Edit = (props: IState) => {
    const { setEditElementId, editElementId, changeParametersCashFlow, clearNewCashFlowItem } = props
    return (
        <>
            <IconButton
                style={{ padding: "5px" }}
                onMouseDown={event => {
                    event.stopPropagation()
                }}
                onClick={() => {
                    if (editElementId) {
                        changeParametersCashFlow(editElementId)
                        setEditElementId(undefined)
                        clearNewCashFlowItem()
                    }
                }}
            >
                <CheckIcon fontSize='small' />
            </IconButton>
            <IconButton
                style={{ padding: "5px" }}
                onMouseDown={event => {
                    event.stopPropagation()
                }}
                onClick={() => {
                    setEditElementId(undefined)
                    clearNewCashFlowItem()
                }}
            >
                <CloseIcon fontSize='small' />
            </IconButton>
        </>
    )
}

interface IMapState {
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    editElementId: fullTable.editElementId
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        changeParametersCashFlow: (id: number) =>
            dispatch(changeParametersCashFlow(id)),
        setEditElementId: (id: number | undefined) =>
            dispatch(setEditElementId(id)),
        clearNewCashFlowItem: () => dispatch(clearNewCashFlowItem())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
