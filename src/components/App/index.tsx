import React, { Component, Dispatch } from "react"
import { connect } from "react-redux"
import { serverMoney } from "../../server"
import { ICashFlow, IValut, TValut, TCashFlow } from "../../interfaces"
import { getCashFlow, getVallet } from "../../store/serverMoney/action"
import AppPage from "./App-Page"

type TProps = {
    getCashFlow(payload: TCashFlow): void
    getVallet(payload: TValut): void
}

export class App extends Component<TProps> {
    componentDidMount(): void {
        const serv: serverMoney = new serverMoney()
        this.getCashFlowFetch(serv)
        this.getValletFetch(serv)
    }

    async getValletFetch(server: serverMoney) {
        const { getVallet } = this.props
        try {
            const res = await server.GetVallets()
            getVallet(res)
        } catch {
            getVallet("Error")
            setTimeout(() => {
                getVallet("Loading...")
                this.getValletFetch(server)
                console.log("reload vallet")
            }, 2000)
        }
    }

    async getCashFlowFetch(server: serverMoney) {
        const { getCashFlow } = this.props
        try {
            const res = await server.getCashFlow()
            getCashFlow(res)
        } catch {
            getCashFlow("Error")
            setTimeout(() => {
                getCashFlow("Loading...")
                this.getCashFlowFetch(server)
                console.log("reload cash flow")
            }, 2000)
        }
    }

    render() {
        return <AppPage />
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        getCashFlow: (cashFlow: ICashFlow[]) => dispatch(getCashFlow(cashFlow)),
        getVallet: (valletCourse: IValut[]) => dispatch(getVallet(valletCourse))
    }
}

export default connect(null, mapDispatchToProps)(App)
