import React, { Component } from "react"
import { connect } from "react-redux"
import { Box, Typography, Paper, Table } from "@material-ui/core"
import { IServerMoney } from "../../../interfaces"
import { IFullTable } from "../../../store/FullTable/interface"
import RowTitle from "./Row_Title"
import Body from "./Body"

export interface IFullBodyText {
    title: string
    emptyArray: string
    collumn: Array<string>
}

interface IFullProps {
    bodyText: IFullBodyText
}

export class FullTable extends Component<IFullProps> {
    render() {
        const { bodyText } = this.props

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
                        <RowTitle />
                        <Body />
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
    bodyText: fullTable.bodyText
})

export default connect(mapStateToProps)(FullTable)
