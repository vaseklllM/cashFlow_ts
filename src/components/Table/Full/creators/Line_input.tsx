import React, { Component, Dispatch } from "react"
import { Input } from "@material-ui/core"
import { connect } from "react-redux"
import { setNewCashFlowItem } from "../../../../store/serverMoney/action"
import { IServerMoney, ICashFlow } from "../../../../interfaces"
import { StyledTableCell } from "../../utils"

// type TkeyName = 

interface IProps {
    newCashFlowItem: ICashFlow | object
    setNewCashFlowItem(value: any): void
    width: string
    keyName: string
    place: string
    ClassNameInputStyle: string
    value: string | number
}

export class InputLine extends Component<IProps> {
    componentDidMount() {
        this.props.setNewCashFlowItem({
            [this.props.keyName]: this.props.value
        })
    }
    render() {
        const {
            newCashFlowItem,
            setNewCashFlowItem,
            width,
            keyName,
            place,
            ClassNameInputStyle
        } = this.props

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
                    // onChange={e => {
                    //     setNewCashFlowItem({ [keyName]: e.target.value })
                    // }}
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
