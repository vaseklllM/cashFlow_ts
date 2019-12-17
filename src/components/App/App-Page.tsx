import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBar from "../NavBar"
import Main from "../Main"
import "./App.scss"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/graphs'>
                    <NavBar />
                    {/* <Graphs /> */}
                </Route>
                <Route path='/'>
                    <NavBar />
                    <Main />
                </Route>
            </Switch>
        </Router>
    )
}
export default App
