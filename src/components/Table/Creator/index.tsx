import React from "react"
import { IValut, ITableCreatorBodyText } from "../../../interfaces"

interface props {
    rows: string[][]
    bodyText: ITableCreatorBodyText
    fullPrice: IValut[]
    checked: number | null
    setCheckBox(id: number): void
    minWidth: string
}

const TableCreator = (props: props) => {
    const { rows, bodyText, fullPrice, checked, setCheckBox, minWidth } = props
    console.log(rows)
    return <div>TableCreator</div>
}

export default TableCreator
