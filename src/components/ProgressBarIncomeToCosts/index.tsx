import React from "react"
import ProgressBar from "../ProgressBar"
import { connect } from "react-redux"
import { IServerMoney, IValut, TCashFlow, TValut } from "../../interfaces"
import { getIncome, getCosts } from "../../utils"

interface IIncomeProps {
    cashFlow: TCashFlow
    vallets: TValut
}
const ProgressBarIncomeToCosts = (props: IIncomeProps) => {
    const { cashFlow, vallets } = props

    let fullIncome: number = 0
    let fullCosts: number = 0
    if (cashFlow !== "Error" && cashFlow !== "Loading..." && vallets !== 'Loading...' && vallets !== 'Error') {
        fullIncome = getIncome(cashFlow, vallets)
        fullCosts =
            getCosts(cashFlow, vallets) < 0
                ? getCosts(cashFlow, vallets) * -1
                : getCosts(cashFlow, vallets)
    }
    const num2: number = fullCosts === 0 ? 1 : fullCosts

    const title = {
        left: "Відношення витрат до доходів в грн.",
        right: `${Math.floor(fullIncome).toLocaleString(
            "en-IN"
        )} грн. / ${Math.floor(num2).toLocaleString("ru-RU")} грн.`
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
    return (
        <ProgressBar width={100} title={{ left: "", right: "" }} />
    )
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
