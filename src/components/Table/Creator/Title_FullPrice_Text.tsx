import React from "react"
import { TValut, IValut, IServerMoney } from "../../../interfaces"
import { Calc } from "../../../utils"
import { connect } from "react-redux"

interface IProps {
    fullPrice: IValut[]
    vallets: TValut
}

const TitleFullPriceText = ({ fullPrice, vallets }: IProps) => {
    const fullPriceSpan: Array<JSX.Element> = fullPrice.map(item => {
        return (
            <span key={item.cc}>
                &nbsp;&nbsp;
                {Calc.showPriceValut(item)}
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
        <span key='last'>{Calc.lastConvert(fullPriceUAH)} ₴</span>
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
