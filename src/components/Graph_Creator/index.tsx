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

interface IProps {
    array: TCashFlow
    type: string
    vallets: TValut
}

const GraphCreator = (props: IProps) => {
    const { array, type, vallets } = props

    if (array === "Error") {
        return <Error />
    } else if (Array.isArray(array) && Array.isArray(vallets)) {
        const names = array.map((i: ICashFlow) => i.name)
        const values = greateArrValues(array, vallets, type)
        // const values = array.map((i: ICashFlow) => {
        //     for (let j = 0; j < vallets.length; j++) {
        //         if (vallets[j].sumbol === i.currency) {
        //             // let priceUah =
        //             //     type === "price"
        //             //         ? vallets[j].value * i[type] * i.pcs
        //             //         : vallets[j].value * i[type]
        //             // return Calc.convertToNumber(priceUah)
        //             return 50
        //         }
        //     }
        // })
        const colors: string[] = array.map(i => Calc.randomColor())
        return <Circule colors={colors} names={names} values={values} />
    } else {
        return <LinearProgress />
    }
}

function greateArrValues(
    arr: ICashFlow[],
    vallets: IValut[],
    type: string
): number[] {
    return [50, 120, 15, 13, 73, 5, 48]
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
