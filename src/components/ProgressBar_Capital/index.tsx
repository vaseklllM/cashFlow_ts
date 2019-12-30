import React, { Component } from "react"
import ProgressBar from "../ProgressBar"
import { connect } from "react-redux"
import { IServerMoney, IValut, TCashFlow, TValut } from "../../interfaces"
import { Calc } from "../../utils"

interface ICapitalProps {
    cashFlow: TCashFlow
    vallets: TValut
}

class ProgressBarCapital extends Component<ICapitalProps> {
    shouldComponentUpdate(nextProps: ICapitalProps) {
        if (
            Array.isArray(this.props.cashFlow) &&
            Array.isArray(nextProps.cashFlow)
        ) {
            if (!Calc.deepEqual(this.props.cashFlow, nextProps.cashFlow)) {
                return true
            }
        }
        if (this.props.vallets !== nextProps.vallets) return true
        return false
    }

    render() {
        const { cashFlow, vallets } = this.props
        let capital: number = 0
        if (
            Array.isArray(cashFlow) &&
            Array.isArray(vallets) &&
            vallets.length !== 0 
        ) {
            const capitalArr = cashFlow.filter(
                item => item.pcs > 0 && item.price !== 0
            )
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
            1000000,
            10000000,
            25000000,
            50000000
        ]

        for (let i = 0; i < num2.length; i++) {
            if (num1 < num2[i]) {
                const title = {
                    left: "Капитал в грн.",
                    right: `${Calc.LC(num1)} грн. / ${Calc.LC(num2[i])} грн.`
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
