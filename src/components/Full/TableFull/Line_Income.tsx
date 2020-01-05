import React, { Component, Dispatch } from "react"
import { StyledTableCell } from "../../Table/utils"
import { ICashFlow, IServerMoney } from "../../../interfaces"
import { Input } from "@material-ui/core"
import { setNewCashFlowItem } from "../../../store/serverMoney/action"
import { connect } from "react-redux"
import { INewCashFlowItem, IsetNewCashFlowItem } from "../../Table/interface"
import { lastConvert } from "../../../utils/calc"

interface IProps {
    item: ICashFlow
    onShow: boolean
    newCashFlowItem: INewCashFlowItem
    setNewCashFlowItem: (value: IsetNewCashFlowItem) => void
}

// комірка з Доходом
class IncomeLine extends Component<IProps> {
    shouldComponentUpdate() {
        const { onShow } = this.props
        if (!onShow) return false
        return true
    }

    componentDidMount() {
        const { item, onShow, setNewCashFlowItem } = this.props
        if (onShow) {
            setNewCashFlowItem({
                key: "income",
                value: item.income
            })
        }
    }
    render() {
        const { item, onShow, newCashFlowItem, setNewCashFlowItem } = this.props
        if (onShow) {
            const inputValue: string | number = (() => {
                if (typeof newCashFlowItem.income === "number") {
                    return newCashFlowItem.income
                } else if (newCashFlowItem.income === "") {
                    return ""
                } else {
                    return item.income
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
                        placeholder='Доход'
                        onMouseDown={event => event.stopPropagation()}
                        onChange={e => {
                            setNewCashFlowItem({
                                key: "income",
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
        } else {
            return (
                <StyledTableCell
                    className={onShow ? "activeTd" : ""}
                    align='right'
                >
                    {lastConvert(item.income, " " + item.currency)}
                </StyledTableCell>
            )
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(IncomeLine)
