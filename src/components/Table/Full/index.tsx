import React, { Component } from "react"
import { connect } from "react-redux"
// material
import {
    Box,
    Typography,
    Paper,
    TableRow,
    TableHead,
    TableBody,
    Table
} from "@material-ui/core"
import { IServerMoney } from "../../../interfaces"

import { IFullTable } from "../../../store/FullTable/interface"

import RowDelete from "./Row_Delete"
import RowTitle from "./Row_Title"
import Body from "./Body"

export interface IFullBodyText {
    title: string
    emptyArray: string
    collumn: Array<string>
}

interface IFullProps {
    onCheck: number[]
    bodyText: IFullBodyText
}

export class FullTable extends Component<IFullProps> {
    render() {
        const { onCheck, bodyText } = this.props

        return (
            <>
                <Box p={0}>
                    <Typography variant='h5' gutterBottom>
                        {bodyText.title}
                    </Typography>
                </Box>
                <Paper
                    style={{
                        width: "100%",
                        overflowX: "auto"
                    }}
                >
                    <Table
                        size='small'
                        aria-label='a dense table'
                        style={{ minWidth: "1500px" }}
                    >
                        <TableHead>
                            <TableRow>
                                {onCheck.length === 0 ? (
                                    <RowTitle />
                                ) : (
                                    <RowDelete />
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Body />
                        </TableBody>
                    </Table>
                </Paper>
            </>
        )
    }
}

interface IMapState {
    serverMoney: IServerMoney
    fullTable: IFullTable
}

const mapStateToProps = ({ fullTable }: IMapState) => ({
    onCheck: fullTable.onCheck,
    bodyText: fullTable.bodyText
})

export default connect(mapStateToProps)(FullTable)
