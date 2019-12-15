import React from "react"
import ProgressBar from "../ProgressBar"
import { connect } from "react-redux"
import { IServerMoney, IValut, TCashFlow, TValut } from "../../interfaces"

interface ICapitalProps {
    cashFlow: TCashFlow
    vallets: TValut
}
const ProgressBarCapital = (props: ICapitalProps) => {
    const { cashFlow, vallets } = props
    let capital: number = 0
    if (
        cashFlow !== "Error" &&
        cashFlow !== "Loading..." &&
        vallets.length !== 0 && vallets !== 'Error' && vallets !== 'Loading...'
    ) {
        const capitalArr = cashFlow.filter(item => item.income === 0)
        capitalArr.forEach(item => {
            let valet: IValut[] = vallets.filter(i => i.cc === item.rate)
            if (valet[0] && valet[0].value) {
                capital += item.price * item.pcs * valet[0].value
            } else {
                capital += item.price * item.pcs
            }
        })
    }

    const num1: number = Math.floor(capital)
    const num2: number[] = [
        5000,
        10000,
        20000,
        50000,
        100000,
        200000,
        500000,
        1000000
    ]

    for (let i = 0; i < num2.length; i++) {
        if (num1 < num2[i]) {
            const title = {
                left: "Капитал в грн.",
                right: `${num1.toLocaleString("ru-RU")} грн. / ${num2[
                    i
                ].toLocaleString("ru-RU")} грн.`
            }
            return (
                <ProgressBar
                    width={parseFloat(((num1 / num2[i]) * 100).toFixed(1))}
                    title={title}
                />
            )
        } else if (num1 > num2[num2.length - 1]) {
            return (
                <ProgressBar
                    width={100}
                    title={{ left: "", right: "Астановись))" }}
                />
            )
        }
    }
    return <ProgressBar width={0} title={{ left: "", right: "" }} />
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => {
    return {
        cashFlow: serverMoney.cashFlow,
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(ProgressBarCapital)
