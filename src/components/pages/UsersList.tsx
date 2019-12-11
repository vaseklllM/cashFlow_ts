import React from "react"
import { user } from "../../interfaces"

interface props {
    date: user[]
}

const UsersList = (props: props) => {
    const { date } = props

    const list = date.map((item: user, index: number) => {
        const { name, age } = item
        if (age > 0) {
            return (
                <li
                    key={index}
                    className='list-group-item list-group-item-action'
                >
                    {name} {age}
                </li>
            )
        }
        return undefined
    })
    return (
        <div style={{ width: "300px" }}>
            <ul className='list-group'>{list}</ul>
        </div>
    )
}

export default UsersList
