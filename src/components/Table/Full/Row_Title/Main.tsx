import React, { Dispatch } from "react"
import { IconButton } from "@material-ui/core"
import { StyledTableCell } from "../../utils"
import AddBoxIcon from "@material-ui/icons/AddBox"
import { IFullBodyText } from ".."
import { connect } from "react-redux"
import { IFullTable } from "../../../../store/FullTable/interface"
import { setEditElementId } from "../../../../store/FullTable/action"
import { TCashFlow, IServerMoney } from "../../../../interfaces"
import { createNewCashFlowItem } from "../../../../store/serverMoney/action"

interface IProps {
    bodyText: IFullBodyText
    setEditElementId(id: number): void
    cashFlow: TCashFlow
    createNewCashFlowItem(id: number): void
}

const Main = (props: IProps) => {
    const { bodyText, setEditElementId, cashFlow, createNewCashFlowItem } = props
    const row: JSX.Element[] = bodyText.collumn.map((item, index) => {
        if (index === 0) {
            return (
                <StyledTableCell key={index} style={{ paddingLeft: "11px" }}>
                    <IconButton
                        style={{ padding: "5px" }}
                        onClick={() => {
                            const nextElementId:
                                | number
                                | undefined = getNextCashFlowId(cashFlow)
                            if (nextElementId) {
                                setEditElementId(nextElementId)
                                createNewCashFlowItem(nextElementId)
                            }
                        }}
                    >
                        <AddBoxIcon htmlColor='white' />
                    </IconButton>
                </StyledTableCell>
            )
        }
        if (index === 1) {
            return <StyledTableCell key={index}> {item}</StyledTableCell>
        }
        return (
            <StyledTableCell key={index} align='right'>
                {item}
            </StyledTableCell>
        )
    })
    return <>{row}</>
}

function getNextCashFlowId(cashFlow: TCashFlow): number | undefined {
    if (Array.isArray(cashFlow)) {
        let nextId: number = 0
        cashFlow.forEach(el => {
            if (el.id > nextId) nextId = el.id
        })
        return ++nextId
    } else {
        return undefined
    }
}

interface IMapState {
    fullTable: IFullTable
    serverMoney: IServerMoney
}
const mapStateToProps = ({ fullTable, serverMoney }: IMapState) => ({
    bodyText: fullTable.bodyText,
    cashFlow: serverMoney.cashFlow
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    setEditElementId: (id: number) => dispatch(setEditElementId(id)),
    createNewCashFlowItem: (id: number) =>dispatch(createNewCashFlowItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
