import React from "react"
import { TValut, IValut, IServerMoney } from "../../../interfaces"
import { connect } from "react-redux"
import { lastConvert } from "../../../utils/calc"

interface IProps {
    fullPrice: IValut[]
    vallets: TValut
}

const TitleFullPriceText: React.FC<IProps> = props => {
    const { fullPrice, vallets } = props

    const fullPriceSpan: Array<JSX.Element> = fullPrice.map(item => {
        return (
            <span key={item.cc}>
                &nbsp;&nbsp;
                {lastConvert(item.value, ` ${item.sumbol}`)}
            </span>
        )
    })

    if (!Array.isArray(fullPrice) || !Array.isArray(vallets)) {
        return <div>{fullPriceSpan}</div>
    }

    let fullPriceUAH: number = 0
    if (Array.isArray(fullPrice) && Array.isArray(vallets)) {
        fullPrice.forEach(item => {
            const vallet: IValut[] = vallets.filter(
                i => i.sumbol === item.sumbol
            )
            if (vallet[0].value && item.value) {
                fullPriceUAH += vallet[0].value * item.value
            }
        })
    }
    const newElement: JSX.Element = (
        <span key='last'> ( {lastConvert(fullPriceUAH, " ₴")} )</span>
    )

    fullPriceSpan.push(newElement)

    return <div>{fullPriceUAH !== 0 ? fullPriceSpan : ""}</div>
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    vallets: serverMoney.vallets
})
export default connect(mapStateToProps)(TitleFullPriceText)
