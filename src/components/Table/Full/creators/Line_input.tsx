import React, { Component, Dispatch } from "react"
import { Input } from "@material-ui/core"
import { connect } from "react-redux"
import { setNewCashFlowItem } from "../../../../store/serverMoney/action"
import {
    IServerMoney,
    TCurrency,
    TRate
} from "../../../../interfaces"
import { StyledTableCell } from "../../utils"



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

interface IProps {
    newCashFlowItem: ITempCashFlow
    setNewCashFlowItem(value: any): void
    width: string
    keyName: string | number
    place: string
    ClassNameInputStyle: string
    value: string | number
}

export class InputLine extends Component<IProps> {
    
    shouldComponentUpdate(nextProps: IProps){

        return true
    }


    render() {
        const {
            // newCashFlowItem,
            setNewCashFlowItem,
            width,
            keyName,
            place,
            // value,
            ClassNameInputStyle
        } = this.props

        // console.log(newCashFlowItem)

        return (
            <StyledTableCell
                className='activeTd'
                align='right'
                style={{ width }}
            >
                <Input
                    style={{ textAlign: "left" }}
                    className={ClassNameInputStyle}
                    placeholder={place}
                    onMouseDown={event => event.stopPropagation()}
                    onChange={e => {
                        setNewCashFlowItem({ [keyName]: e.target.value })
                    }}
                    // value={newCashFlowItem[keyName] || ""}
                    inputProps={{
                        "aria-label": "description"
                    }}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(InputLine)
