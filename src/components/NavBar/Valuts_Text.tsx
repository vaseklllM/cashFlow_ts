import React from "react"
import { TValut, IServerMoney, IValut } from "../../interfaces"
import { connect } from "react-redux"
import { Calc } from "../../utils"
import { CircularProgress } from "@material-ui/core"
import WarningRoundedIcon from "@material-ui/icons/WarningRounded"

interface IProps {
    vallets: TValut
}

const Valuts_Text = ({ vallets }: IProps) => {
    if (vallets === "Error") {
        return <WarningRoundedIcon fontSize='large' />
    }
    if (vallets === "Loading...") {
        return <CircularProgress color='inherit' />
    }

    let newValletst: IValut[] = vallets.filter(i => i.sumbol !== "₴")
    return (
        <div>
            {newValletst.map((item: IValut, index: number) => {
                return (
                    <span key={index} className='circle'>
                        {`${item.sumbol} ${Calc.LC(item.value)}`}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                )
            })}
        </div>
    )
}

interface IMapState {
    serverMoney: IServerMoney
}
const mapStateToProps = ({ serverMoney }: IMapState) => ({
    vallets: serverMoney.vallets
})

export default connect(mapStateToProps)(Valuts_Text)
