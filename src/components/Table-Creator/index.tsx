import React from "react"

interface props {
    rows: any
    bodyText: any
    fullPrice: any
    checked: boolean
    setCheckBox: any
    minWidth: string
}

const TableCreator = (props: props) => {
    const { rows, bodyText, fullPrice, checked, setCheckBox, minWidth } = props
    return <div>TableCreator</div>
}

export default TableCreator
