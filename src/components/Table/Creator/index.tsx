import React from "react"
import Title from "./Title"
import Body from "./Body"
import { IValut } from "../../../interfaces"
import { IBodyText } from "../interface"
import "./style.scss"

interface props {
    rows: string[][] | "Loading..."
    bodyText: IBodyText
    fullPrice: IValut[]
    checked: number | null
    setCheckBox(id: number): void
    minWidth: string
}

const TableCreator = (props: props) => {
    const { rows, bodyText, fullPrice, checked, setCheckBox, minWidth } = props
    return (
        <>
            <Title title={bodyText.title} fullPrice={fullPrice} />
            <Body
                rows={rows}
                text={bodyText}
                checked={checked}
                setCheckBox={setCheckBox}
                minWidth={minWidth}
            />
        </>
    )
}

export default TableCreator
