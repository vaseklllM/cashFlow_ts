import React from "react"
import {
    TCashFlow,
    IServerMoney,
    TValut,
    ICashFlow,
    IValut
} from "../../interfaces"
import { LinearProgress } from "@material-ui/core"
import Error from "../Error"
import { Calc } from "../../utils"
import { connect } from "react-redux"
import Circule from "./Circule"

type TProps = {
    array: TCashFlow
    type: "fullPrice" | "income"
    vallets: TValut
}

const GraphCreator: React.FC<TProps> = props => {
    const { array, type, vallets } = props

    if (array === "Error") {
        return <Error />
    } else if (Array.isArray(array) && Array.isArray(vallets)) {
        const names = array.map((i: ICashFlow) => i.name)
        const values = greateArrValues(array, vallets, type)
        const colors: string[] = array.map(i => Calc.randomColor())
        return <Circule colors={colors} names={names} values={values} />
    } else {
        return <LinearProgress />
    }
}

function greateArrValues(
    arr: ICashFlow[],
    vallets: IValut[],
    type: "fullPrice" | "income"
): number[] {
    let lastArr: number[] = []
    arr.forEach((el: ICashFlow) => {
        let valut: IValut = vallets.filter(i => i.cc === el.rate)[0]
        if (valut.value) {
            if (type === "fullPrice") {
                lastArr.push(valut.value * (el.price * el.pcs))
            } else if (type === "income") {
                lastArr.push(valut.value * el.income)
            }
        }
    })
    return lastArr
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => {
    return {
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(GraphCreator)
