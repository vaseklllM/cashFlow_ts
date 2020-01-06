import React from "react"
import { TValut, IServerMoney, IValut } from "../../interfaces"
import { connect } from "react-redux"
import { CircularProgress } from "@material-ui/core"
import WarningRoundedIcon from "@material-ui/icons/WarningRounded"
import { lastConvert } from "../../utils/calc"

type TProps = {
    vallets: TValut
}

const Valuts_Text: React.FC<TProps> = props => {
    const { vallets } = props
    if (vallets === "Error") {
        return <WarningRoundedIcon fontSize='large' />
    } else if (vallets === "Loading...") {
        return <CircularProgress color='inherit' />
    }

    let newValletst: IValut[] = vallets.filter(i => i.sumbol !== "₴")
    return (
        <div>
            {newValletst.map((item: IValut, index: number) => {
                return (
                    <span key={index} className='circle'>
                        {`${item.sumbol} ${lastConvert(item.value)}`}
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
