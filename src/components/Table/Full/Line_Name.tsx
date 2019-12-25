import React, { Component, Dispatch } from "react"
import { ICashFlow, IServerMoney, TCurrency, TRate } from "../../../interfaces"
import { StyledTableCell } from "../utils"
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

// комірка з назвою елемента
class LineName extends Component<IProps> {
    shouldComponentUpdate() {
        const { onShow } = this.props
        if (!onShow) return false
        return true
    }

    componentDidMount() {
        const { item, onShow, setNewCashFlowItem } = this.props
        if (onShow) {
            setNewCashFlowItem({
                key: "name",
                value: item.name
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
                        style={{ textAlign: "left" }}
                        className='FullTableNameInput'
                        placeholder='Назва'
                        onMouseDown={event => event.stopPropagation()}
                        onChange={e => {
                            setNewCashFlowItem({
                                key: "name",
                                value: e.target.value
                            })
                        }}
                        value={newCashFlowItem.name || ""}
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
                    align='left'
                >
                    {item.name}
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

export default connect(mapStateToProps, mapDispatchToProps)(LineName)