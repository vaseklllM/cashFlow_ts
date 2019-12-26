import React, { Dispatch } from "react"
import { StyledTableRow, StyledTableCell } from "../utils"
import LineName from "./Line_Name"
import { Calc } from "../../../utils"
import { LinearProgress, TableBody } from "@material-ui/core"
import { connect } from "react-redux"
import { IFullTable } from "../../../store/FullTable/interface"
import { IFullBodyText } from "."
import { TCashFlow, IServerMoney, TSearchCashFlow } from "../../../interfaces"
import LineDate from "./Line_Date"
import LinePriceToPcs from "./Line_PriceToPcs"
import LinePcs from "./Line_Pcs"
import LineIncome from "./Line_Income"
import LineValute from "./Line_Valute"
import { setCheckBox } from "../../../store/serverMoney/action"

interface IProps {
    bodyText: IFullBodyText
    searchCashFlow: TSearchCashFlow
    cashFlow: TCashFlow
    editElementId: null | number
    setCheckBox(index: number): void
}

const Body = (props: IProps) => {
    const {
        bodyText,
        searchCashFlow,
        cashFlow,
        setCheckBox,
        editElementId
    } = props


    let mainArray: TCashFlow = "Loading..."
    searchCashFlow !== "None" && Array.isArray(searchCashFlow)
        ? (mainArray = searchCashFlow)
        : (mainArray = cashFlow)

    if (Array.isArray(mainArray) && mainArray.length === 0) {
        // Пуста Таблиця
        return (
            <TableBody>
                <StyledTableRow>
                    <StyledTableCell colSpan={bodyText.collumn.length}>
                        Таблиця пуста
                    </StyledTableCell>
                </StyledTableRow>
            </TableBody>
        )
    } else if (mainArray === "Loading...") {
        // Загрузка
        return (
            <TableBody>
                <StyledTableRow>
                    <StyledTableCell colSpan={bodyText.collumn.length}>
                        <div style={{ flexGrow: 1 }}>
                            <LinearProgress />
                        </div>
                    </StyledTableCell>
                </StyledTableRow>
            </TableBody>
        )
    }

    let bodyTable: JSX.Element[] | JSX.Element = <div></div>
    if (Array.isArray(mainArray) && mainArray.length !== 0) {
        bodyTable = mainArray.map(item => {
            const { dateBuy, checked, id } = item

            const onShow = id === editElementId
            return (
                <StyledTableRow
                    hover
                    key={id}
                    onMouseDown={() => {
                        setCheckBox(id)
                    }}
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
                    <LineDate item={item} onShow={onShow} />
                    <StyledTableCell align='right'>
                        {Calc.retentionTime(dateBuy)}
                    </StyledTableCell>
                    <LinePriceToPcs item={item} onShow={onShow} />
                    <LinePcs item={item} onShow={onShow} />
                    <LineIncome item={item} onShow={onShow} />
                    <LineValute item={item} onShow={onShow} />
                    <StyledTableCell align='right'>
                        {Calc.LC(item.pcs * item.price, " " + item.currency)}
                    </StyledTableCell>
                    <StyledTableCell align='right'>
                        {Calc.roi(item)}
                    </StyledTableCell>
                </StyledTableRow>
            )
        })
    }
    return <TableBody>{bodyTable}</TableBody>
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

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        setCheckBox: (index: number) => dispatch(setCheckBox(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body)
