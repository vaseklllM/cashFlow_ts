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
import { connect } from "react-redux"
import Circule from "./Circule"
import { convertToNumber } from "../../utils/calc"
import BarGraph from "./Bar"

type TProps = {
    array: TCashFlow
    type: "fullPrice" | "income"
    vallets: TValut
    showtype: "bar" | "pie"
}

const GraphCreator: React.FC<TProps> = props => {
    const { array, type, vallets, showtype } = props
    if (array === "Error") {
        return <Error />
    } else if (Array.isArray(array) && Array.isArray(vallets)) {
        const names = array.map((i: ICashFlow) => i.name)
        const values = greateArrValues(array, vallets, type)
        if (showtype === "bar") {
            return <BarGraph names={names} values={values} />
        } else {
            return <Circule names={names} values={values} />
        }
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
                lastArr.push(convertToNumber(valut.value * (el.price * el.pcs)))
            } else if (type === "income") {
                lastArr.push(convertToNumber(valut.value * el.income))
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
