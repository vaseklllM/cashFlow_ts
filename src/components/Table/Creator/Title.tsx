import React, { Component } from "react"
import { IValut, IServerMoney } from "../../../interfaces"
import { connect } from "react-redux"
import { Typography, Box } from "@material-ui/core"
import { Calc } from "../../../utils"

interface IProps {
    title: string
    fullPrice: IValut[]
    vallets: IValut[]
}

class Title extends Component<IProps> {
    // Компонент обновляється при зміні title, fullPrice, vallets
    shouldComponentUpdate(nextProps: IProps) {
        const { title, fullPrice, vallets } = this.props
        if (title !== nextProps.title) return true
        if (!Calc.deepEqual(fullPrice, nextProps.fullPrice)) return true
        if (!Calc.deepEqual(vallets, nextProps.vallets)) return true
        return false
    }

    render() {
        const { title, fullPrice, vallets } = this.props
        const fullPriceSpan: Array<JSX.Element> = fullPrice.map(item => {
            return (
                <span key={item.cc}>
                    {Calc.showPriceValut(item)}
                    &nbsp;&nbsp;
                </span>
            )
        })

        let fullPriceUAH: number = 0
        if (vallets.length !== 0 && fullPrice.length !== 0) {
            fullPrice.forEach(item => {
                const vallet: IValut[] = vallets.filter(
                    i => i.sumbol === item.sumbol
                )
                if (vallet[0].value && item.value) {
                    fullPriceUAH += vallet[0].value * item.value
                }
            })
        }
        const newElement: JSX.Element = (
            <span key='last'>{Calc.convertToNumber(fullPriceUAH)}</span>
        )

        fullPriceSpan.push(newElement)

        return (
            <Box
                display='flex'
                justifyContent='space-between'
                className='tableTitle'
                p={1}
                pb={0}
            >
                <Box p={0}>
                    <Typography variant='h5' gutterBottom>
                        {title}
                    </Typography>
                </Box>
                <Box p={0} className='tableTitle-content'>
                    <Typography
                        style={{ display: "flex", alignItems: "center" }}
                        variant='subtitle1'
                        gutterBottom
                    >
                        {fullPriceSpan}
                    </Typography>
                </Box>
            </Box>
        )
    }
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => {
    return {
        vallets: serverMoney.vallets
    }
}

export default connect(mapStateToProps)(Title)
