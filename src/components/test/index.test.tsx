import React from "react"
import { render } from "@testing-library/react"
import App from "./index"

test("renders learn react link", () => {
    const name = "kesh"
    const { getByText } = render(<App name={name} />)
    // getByText('Edit src/App.tsx and save to reload.')
    const spanElement: HTMLElement = getByText("Edit and save to reload.")
    const h5: HTMLElement | null = spanElement.querySelector("h5")

    if (h5) {
        console.log(h5.innerHTML)
    }
})
