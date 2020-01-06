import React from "react"
import { render } from "@testing-library/react"
import { TValut } from "../../../interfaces"
import Title from "./Title"

const price: TValut = [{ value: 60000, cc: "UAH", sumbol: "₴" }]

test("renders Table Creator title", () => {
    const text: string = "qwewqdasdasd"
    const { getByText } = render(<Title title={text} fullPrice={price} />)
    // const h5Element = getByText(text)
})
