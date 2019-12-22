import React from "react"
import { StyledTableRow, StyledTableCell } from "../utils"
import LineName from "./Line_Name"
import { Calc } from "../../../utils"
import { LinearProgress } from "@material-ui/core"
import { connect } from "react-redux"
import { IFullTable } from "../../../store/FullTable/interface"
import { IFullBodyText } from "."
import { TCashFlow, IServerMoney, TSearchCashFlow } from "../../../interfaces"

interface IProps {
    bodyText: IFullBodyText
    searchCashFlow: TSearchCashFlow
    cashFlow: TCashFlow
    editElementId: null | number
}

const Body = ({
    bodyText,
    searchCashFlow,
    cashFlow,
    editElementId
}: IProps) => {
    let mainArray: TCashFlow = "Loading..."
    searchCashFlow !== "None" && Array.isArray(searchCashFlow)
        ? (mainArray = searchCashFlow)
        : (mainArray = cashFlow)

    let bodyTable: JSX.Element[] | JSX.Element = <div></div>
    if (Array.isArray(mainArray) && mainArray.length !== 0) {
        bodyTable = mainArray.map(item => {
            const { dateBuy, checked, id } = item

            const onShow = id === editElementId
            return (
                <StyledTableRow
                    hover
                    key={id}
                    // onMouseDown={() => {
                    //     setCheckBox(id)
                    // }}
                    style={
                        checked
                            ? { backgroundColor: "rgba(0, 0, 0, 0.15)" }
                            : {}
                    }
                >
                    <StyledTableCell className='fullTable' padding='checkbox'>
                        <div className='fullTable-Buttons'>
                            {/* {leftControlBtn(item)} */}
                        </div>
                    </StyledTableCell>
                    <LineName item={item} onShow={onShow} />
                    {/* <DateLine item={item} onShow={onShow} /> */}
                    <StyledTableCell align='right'>
                        {/* {retentionTime(dateBuy)} */}
                    </StyledTableCell>
                    {/* <PriceToPcsLine item={item} onShow={onShow} /> */}
                    {/* <PcsLine item={item} onShow={onShow} /> */}
                    {/* <IncomeLine item={item} onShow={onShow} /> */}
                    {/* <ValuteLine item={item} onShow={onShow} /> */}
                    <StyledTableCell align='right'>
                        {Calc.LC(item.pcs * item.price, " " + item.currency)}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                        {Calc.roi(item)}
                    </StyledTableCell>
                </StyledTableRow>
            )
        })
    } else if (Array.isArray(mainArray) && mainArray.length === 0) {
        bodyTable = (
            <StyledTableRow>
                <StyledTableCell colSpan={bodyText.collumn.length}>
                    Таблиця пуста
                </StyledTableCell>
            </StyledTableRow>
        )
    } else if (mainArray === "Loading...") {
        bodyTable = (
            <StyledTableRow>
                <StyledTableCell colSpan={bodyText.collumn.length}>
                    <div style={{ flexGrow: 1 }}>
                        <LinearProgress />
                    </div>
                </StyledTableCell>
            </StyledTableRow>
        )
    }
    return <>{bodyTable}</>
}

interface IMapState {
    fullTable: IFullTable
    serverMoney: IServerMoney
}

const mapStateToProps = ({ fullTable, serverMoney }: IMapState) => ({
    bodyText: fullTable.bodyText,
    searchCashFlow: serverMoney.searchCashFlow,
    cashFlow: serverMoney.cashFlow,
    editElementId: fullTable.editElementId
})

export default connect(mapStateToProps)(Body)
