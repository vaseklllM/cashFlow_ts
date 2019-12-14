import React from "react"
import { ITableCreatorBodyText } from "../../../interfaces"

interface IBodyProps {
    rows: string[][]
    text: ITableCreatorBodyText
    checked: number | null
    setCheckBox(id: number): void
    minWidth: string
}

const Body = (props: IBodyProps) => {
    const {
        rows,
        text: { emptyArray, collumn },
        checked,
        setCheckBox,
        minWidth
    } = props
    return <div>Body</div>
}

export default Body
