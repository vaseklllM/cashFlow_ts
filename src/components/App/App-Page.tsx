import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Active from "../Table/Active"
// import NavBar from "../NavBar"
import "./App.scss"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    {/* <NavBar /> */}
                    <Active />
                </Route>
            </Switch>
        </Router>
    )
}
export default App
