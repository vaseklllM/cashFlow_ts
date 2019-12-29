import React, { Component } from "react"
import ProgressBar from "../ProgressBar"
import { connect } from "react-redux"
import { IServerMoney, TCashFlow, TValut } from "../../interfaces"
import { getIncome, getCosts, Calc } from "../../utils"

interface IIncomeProps {
    cashFlow: TCashFlow
    vallets: TValut
}
class ProgressBarIncomeToCosts extends Component<IIncomeProps> {
    shouldComponentUpdate(nextProps: IIncomeProps) {
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

        let fullIncome: number = 0
        let fullCosts: number = 0
        if (Array.isArray(cashFlow) && Array.isArray(vallets)) {
            fullIncome = getIncome(cashFlow, vallets)
            fullCosts =
                getCosts(cashFlow, vallets) < 0
                    ? getCosts(cashFlow, vallets) * -1
                    : getCosts(cashFlow, vallets)
        }
        const num2: number = fullCosts === 0 ? 1 : fullCosts

        const title = {
            left: "Відношення витрат до доходів в грн.",
            right: `${Calc.LC(fullIncome, " грн.")} / ${Calc.LC(num2, " грн.")}`
        }
        if (fullIncome < num2) {
            return (
                <ProgressBar
                    width={parseFloat(((fullIncome / num2) * 100).toFixed(1))}
                    title={title}
                />
            )
        } else if (fullIncome > num2) {
            return (
                <ProgressBar
                    width={100}
                    title={{ right: "Кінець гри", left: "" }}
                />
            )
        }
        return <ProgressBar width={100} title={{ left: "", right: "" }} />
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

export default connect(mapStateToProps)(ProgressBarIncomeToCosts)
