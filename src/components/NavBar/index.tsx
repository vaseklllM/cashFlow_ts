import React from "react"
import NavBarPage from "./NavBar_Page"
import { IServerMoney, TValut } from "../../interfaces"
import { connect } from "react-redux"

interface IProps {
    vallets: TValut
}

const NavBar = ({ vallets }: IProps) => {
    return <NavBarPage vallets={vallets} />
}

interface IMapState {
    serverMoney: IServerMoney
}

const mapStateToProps = ({ serverMoney }: IMapState) => ({
    vallets: serverMoney.vallets
})

export default connect(mapStateToProps)(NavBar)
