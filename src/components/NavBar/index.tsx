import React from "react"
import NavBar from "./NavBar-Page"
import { IValut } from "../../interfaces"

const index = () => {
    const valets: IValut[] = [
        { cc: "BTC", sumbol: "₿", value: 167500 },
        { cc: "RUB", sumbol: "₽", value: 0.37 },
        { cc: "USD", sumbol: "$", value: 23.8 },
        { cc: "EUR", sumbol: "€", value: 27.2 }
    ]
    return <NavBar vallets={valets} />
}

export default index
