import React, { Component } from "react"
import { connect } from "react-redux"
import { serverMoney } from "../../server"
import { ICashFlow, IValut, TValut } from "../../interfaces"
import { getCashFlow, getVallet } from "../../store/serverMoney/action"
import AppPage from "./App-Page"

interface props {
    getCashFlow(payload: ICashFlow[]): void
    getVallet(payload: TValut): void
}

export class App extends Component<props> {
    componentDidMount(): void {
        const { getCashFlow } = this.props
        const serv: serverMoney = new serverMoney()
        serv.getCashFlow().then(res => {
            getCashFlow(res)
        })
        this.getValletFetch(serv)
    }

    async getValletFetch(server: serverMoney) {
        const { getVallet } = this.props
        try {
            const res = await server.GetVallets()
            getVallet(res)
        } catch {
            getVallet('Error')
            setTimeout(() => {
                getVallet('Loading...')
                this.getValletFetch(server)
                console.log("reload vallet")
            }, 2000)
        }
    }

    render() {
        return <AppPage />
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCashFlow: (cashFlow: ICashFlow[]) => dispatch(getCashFlow(cashFlow)),
        getVallet: (valletCourse: IValut[]) => dispatch(getVallet(valletCourse))
    }
}

export default connect(null, mapDispatchToProps)(App)
