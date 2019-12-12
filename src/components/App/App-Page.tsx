import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Active from "../Table-Active"
import "./App.scss"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Active />
                </Route>
            </Switch>
        </Router>
    )
}
export default App
