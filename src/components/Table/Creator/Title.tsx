import React, { Component } from "react"
import { IValut, IServerMoney, TValut } from "../../../interfaces"
import { connect } from "react-redux"
import { Typography, Box } from "@material-ui/core"
import TitleFullPriceText from "./Title_FullPrice_Text"
import { deepEqual } from "../../../utils/calc"

interface IProps {
    title: string
    fullPrice: IValut[]
    vallets: TValut
}

class Title extends Component<IProps> {
    // Компонент обновляється при зміні title, fullPrice, vallets
    shouldComponentUpdate(nextProps: IProps) {
        const { title, fullPrice, vallets } = this.props
        if (title !== nextProps.title) return true
        if (!deepEqual(fullPrice, nextProps.fullPrice)) return true
        if (Array.isArray(vallets) && Array.isArray(nextProps.vallets)) {
            if (!deepEqual(vallets, nextProps.vallets)) return true
        }
        return false
    }

    render() {
        const { title, fullPrice } = this.props
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
                        <TitleFullPriceText fullPrice={fullPrice} />
                    </Typography>
                </Box>
            </Box>
        )
    }
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    vallets: serverMoney.vallets
})

export default connect(mapStateToProps)(Title)
