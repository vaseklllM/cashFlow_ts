import React from "react"
import Title from "./Title"
import Body from "./Body"
import { IValut } from "../../../interfaces"
import { IBodyText } from "../interface"
import "./style.scss"

interface IProps {
    bodyText: IBodyText
    fullPrice: IValut[]
    checked: number | null
    setCheckBox(id: number): void
    minWidth: string
}

const TableCreator: React.FC<IProps> = props => {
    const { bodyText, fullPrice, checked, setCheckBox, minWidth } = props
    return (
        <>
            <Title title={bodyText.title} fullPrice={fullPrice} />
            <Body
                text={bodyText}
                checked={checked}
                setCheckBox={setCheckBox}
                minWidth={minWidth}
            />
        </>
    )
}

export default TableCreator
