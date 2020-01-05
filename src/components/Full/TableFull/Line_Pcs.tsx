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
    setNewCashFlowItem(value: IsetNewCashFlowItem): void
}

// комірка з кількістю шт.
class PcsLine extends Component<IProps> {
    shouldComponentUpdate() {
        const { onShow } = this.props
        if (!onShow) return false
        return true
    }

    componentDidMount() {
        const { item, onShow, setNewCashFlowItem } = this.props
        if (onShow) {
            setNewCashFlowItem({
                key: "pcs",
                value: item.pcs
            })
        }
    }

    render() {
        const { item, onShow, newCashFlowItem, setNewCashFlowItem } = this.props
        if (onShow) {
            const inputValue: string | number = (() => {
                if (typeof newCashFlowItem.pcs === "number") {
                    return newCashFlowItem.pcs
                } else if (newCashFlowItem.pcs === "") {
                    return ""
                } else {
                    return item.pcs
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
                        placeholder='Кількість'
                        onMouseDown={event => event.stopPropagation()}
                        onChange={e => {
                            setNewCashFlowItem({
                                key: "pcs",
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
                    {lastConvert(item.pcs, " шт.")}
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

export default connect(mapStateToProps, mapDispatchToProps)(PcsLine)
