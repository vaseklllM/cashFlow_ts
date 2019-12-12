import React, { Component } from "react"
import { connect } from "react-redux"
import { serverMoney } from "../../server"
import { ICashFlow, IValut } from "../../interfaces"
import { getCashFlow, getVallet } from "../../store/serverMoney/action"
import AppPage from "./App-Page"

interface props {
    getCashFlow(payload: ICashFlow[]): void
    getVallet(payload: IValut[]): void
}

export class App extends Component<props> {
    componentDidMount(): void {
        const { getCashFlow } = this.props
        const serv: serverMoney = new serverMoney()
        serv.getCashFlow().then(res => {
            getCashFlow(res)
        })
        this.getVallet(serv)
    }

    async getVallet(server: serverMoney) {
        const { getVallet } = this.props
        try {
            const res = await server.GetVallets()
            res.forEach(item => {
                if (!item.value) {
                    throw new Error("error loading vallets")
                }
            })
            getVallet(res)
        } catch {
            setTimeout(() => {
                this.getVallet(server)
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
