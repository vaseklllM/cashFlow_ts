import React, { Dispatch, Component } from "react"
import { StyledTableCell } from "../utils"
import { ICashFlow, IServerMoney } from "../../../interfaces"
import { Input } from "@material-ui/core"
import { connect } from "react-redux"
import { setNewCashFlowItem } from "../../../store/serverMoney/action"
import { INewCashFlowItem, IsetNewCashFlowItem } from "../interface"
import { lastConvert } from "../../../utils/calc"

interface IProps {
    item: ICashFlow
    onShow: boolean
    newCashFlowItem: INewCashFlowItem
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
            const inputValue: string | number = (() => {
                if (typeof newCashFlowItem.price === "number") {
                    return newCashFlowItem.price
                } else if (newCashFlowItem.price === "") {
                    return ""
                } else {
                    return item.price
                }
            })()
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
                        value={inputValue}
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
                    {lastConvert(item.price, " " + item.currency)}
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
