import React, { Dispatch, Component } from "react"
import { Checkbox, IconButton } from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import { connect } from "react-redux"
import { IFullTable } from "../../../../store/FullTable/interface"
import { setItemSelectedId, setEditElementId } from "../../../../store/FullTable/action"
import { ICashFlow } from "../../../../interfaces"

interface IProps {
    item: ICashFlow
    itemSelectedId: number[]
    setItemSelectedId(id: number): void
    setEditElementId(id: number | undefined) : void
}

class View extends Component<IProps> {
    shouldComponentUpdate(nextProps: IProps) {
        const newItemSelect: boolean =
            this.props.itemSelectedId.indexOf(this.props.item.id) !== -1

        const lastItemSelect: boolean =
            nextProps.itemSelectedId.indexOf(this.props.item.id) !== -1

        if (!newItemSelect && !lastItemSelect) {
            return false
        }
        return true
    }

    render() {
        const { itemSelectedId, setItemSelectedId, item, setEditElementId } = this.props
        return (
            <>
                <Checkbox
                    checked={itemSelectedId.indexOf(item.id) !== -1}
                    onMouseDown={event => {
                        event.stopPropagation()
                    }}
                    onClick={() => {
                        setItemSelectedId(item.id)
                    }}
                />
                <IconButton
                    style={{ padding: "5px" }}
                    onMouseDown={event => {
                        event.stopPropagation()
                    }}
                    onClick={() => {
                        setEditElementId(item.id)
                        // onClickEditelementId(item.id)
                    }}
                >
                    <EditIcon fontSize='small' />
                </IconButton>
            </>
        )
    }
}

interface IMapState {
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    itemSelectedId: fullTable.itemSelectedId
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setItemSelectedId: (id: number) => dispatch(setItemSelectedId(id)),
    setEditElementId: (id: number | undefined) => dispatch(setEditElementId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
