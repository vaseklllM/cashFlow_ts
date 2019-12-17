import React from "react"
import { TValut, IServerMoney, IValut } from "../../interfaces"
import { connect } from "react-redux"
import { Calc } from "../../utils"
import { CircularProgress } from "@material-ui/core"
import WarningIcon from "@material-ui/icons/Warning"

interface IProps {
    vallets: TValut
}

const Valuts_Text = ({ vallets }: IProps) => {
    if (vallets === "Error") {
        return <WarningIcon fontSize='large' />
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
                        {`${item.sumbol} ${Calc.showNawBarPrice(item.value)}`}
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
