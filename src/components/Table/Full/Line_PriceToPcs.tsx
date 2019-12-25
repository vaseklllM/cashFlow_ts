import React, { Dispatch, Component } from "react"
import { Calc } from "../../../utils"
import { StyledTableCell } from "../utils"
import { ICashFlow, IServerMoney, TCurrency, TRate } from "../../../interfaces"
import { Input } from "@material-ui/core"
import { connect } from "react-redux"
import { setNewCashFlowItem } from "../../../store/serverMoney/action"

interface ITempCashFlow {
    name?: string
    id?: number
    pcs?: number
    price?: number
    income?: number
    currency?: TCurrency
    rate?: TRate
    dateBuy?: string | Date
    checked?: boolean
}

interface IsetNewCashFlowItem {
    key: string
    value: string | number
}

interface IProps {
    item: ICashFlow
    onShow: boolean
    newCashFlowItem: ITempCashFlow
    setNewCashFlowItem(value: IsetNewCashFlowItem): void
}

// комірка "Ціна загалом"
class LinePriceToPcs extends Component<IProps> {
    shouldComponentUpdate() {
        const { onShow } = this.props
        if (!onShow) return false
        return true
    }

    componentDidMount() {
        const { item, onShow, setNewCashFlowItem } = this.props
        if (onShow) {
            setNewCashFlowItem({
                key: "price",
                value: item.price
            })
        }
    }

    render() {
        const { item, onShow, newCashFlowItem, setNewCashFlowItem } = this.props
        if (onShow) {
            return (
                <StyledTableCell
                    className='activeTd'
                    align='right'
                    style={{ width: "13%" }}
                >
                    <Input
                        type='number'
                        className='FullTableInput'
                        placeholder='Ціна за шт.'
                        onMouseDown={event => event.stopPropagation()}
                        onChange={e => {
                            setNewCashFlowItem({
                                key: "price",
                                value: e.target.value
                            })
                        }}
                        value={newCashFlowItem.price || ""}
                        inputProps={{
                            "aria-label": "description"
                        }}
                    />
                </StyledTableCell>
            )
        } else
            return (
                <StyledTableCell
                    className={onShow ? "activeTd" : ""}
                    align='right'
                >
                    {Calc.LC(item.price, " " + item.currency)}
                </StyledTableCell>
            )
    }
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => {
    return {
        newCashFlowItem: serverMoney.newCashFlowItem
    }
}
const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setNewCashFlowItem: (value: any) => dispatch(setNewCashFlowItem(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinePriceToPcs)
