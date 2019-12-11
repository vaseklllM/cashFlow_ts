import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "./components/container"
import rootReducer from "./store/reducers"
import { createStore } from "redux"
import { Provider } from "react-redux"

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
)
