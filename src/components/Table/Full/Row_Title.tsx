import React from "react"
import { connect } from "react-redux"
import { StyledTableCell } from "../utils"
import { IconButton } from "@material-ui/core"
import AddBoxIcon from "@material-ui/icons/AddBox"
import { IFullBodyText } from "."
import { IFullTable } from "../../../store/FullTable/interface"

interface IProps {
    bodyText: IFullBodyText
}

function Row_Title({ bodyText }: IProps) {
    const row = bodyText.collumn.map((item, index) => {
        if (index === 0) {
            return (
                <StyledTableCell key={index} style={{ paddingLeft: "11px" }}>
                    <IconButton
                        style={{ padding: "5px" }}
                        // onClick={() => this.createNewItem()}
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

interface IMapState {
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    bodyText: fullTable.bodyText
})

export default connect(mapStateToProps)(Row_Title)
