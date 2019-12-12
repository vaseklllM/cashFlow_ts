import React from "react"
import ReactDOM from "react-dom"
import rootReducer from "./store/reducers"
import { createStore } from "redux"
import { Provider } from "react-redux"
import App from "./components/App"

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)
