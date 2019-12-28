import React from "react"
import { connect } from "react-redux"
import { TableHead, TableRow } from "@material-ui/core"
import RowDelete from "./Delete"
import { IFullTable } from "../../../../store/FullTable/interface"
import MainRow from "./Main"

interface IProps {
    itemSelectedId: number[]
}

function Row_Title(props: IProps) {
    const { itemSelectedId } = props

    if (itemSelectedId.length !== 0) {
        return (
            <TableHead>
                <TableRow>
                    <RowDelete />
                </TableRow>
            </TableHead>
        )
    } else {
        return (
            <TableHead>
                <TableRow>
                    <MainRow />
                </TableRow>
            </TableHead>
        )
    }
}

interface IMapState {
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    itemSelectedId: fullTable.itemSelectedId
})

export default connect(mapStateToProps)(Row_Title)
