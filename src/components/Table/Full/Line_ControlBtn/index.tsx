import React from "react"
import Edit from "./Edit"
import View from "./View"
import { ICashFlow } from "../../../../interfaces"
import { connect } from "react-redux"
import { IFullTable } from "../../../../store/FullTable/interface"

interface IProps {
    item: ICashFlow
    editElementId: number | undefined
}

const LineControlBtn = (props: IProps) => {
    const { item, editElementId } = props
    if (item.id === editElementId) {
        return <Edit/>
    } 
    return <View item={item}/>
}

interface IMapState {
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    editElementId: fullTable.editElementId
})

export default connect(mapStateToProps)(LineControlBtn)
