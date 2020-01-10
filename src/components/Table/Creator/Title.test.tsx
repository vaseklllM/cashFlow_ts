import React from "react"
import { render } from "@testing-library/react"
import Title from "./Title"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "../../../store/reducers"

const store = createStore(reducer)

test("renders Table/Creator/title", () => {
    const text: string = "Lorem ipsum dolor sit amet."
    const { getByText } = render(
        <Provider store={store}>
            <Title title={text} fullPrice={[]} />
        </Provider>
    )
    getByText(text)
    
    // expect(getByText(text)).toMatchSnapshot()
})
