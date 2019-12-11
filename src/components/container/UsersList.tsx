import React, { Component } from "react"
import { UsersList, Loader, Error } from "../pages"
import usersService from "../../server"
import { user } from "../../interfaces"

interface IState {
    date: user[] | null | []
    err: boolean
}

class UresrListComponent extends Component {
    state: IState = {
        date: null,
        err: false
    }

    componentDidMount(): void {
        const serv = new usersService()
        serv.getUsers().then(res => {
            if (res && res.length >= 0) {
                this.setState({ date: res })
            } else {
                this.setState({ err: true })
            }
        })
    }

    render() {
        const { date, err } = this.state
        if (date === null && !err) return <Loader />
        if (err) return <Error />
        if (date !== null && date.length !== 0) return <UsersList date={date} />
        if (date && date.length === 0) return <span>Массив пустой</span>
    }
}

export default UresrListComponent
