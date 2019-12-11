import React from "react"
import { Main } from "./pages"
// import { NavBar, Graphs } from "./Containers"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.scss"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/graphs'>
                    {/* <NavBar />
                    <Graphs /> */} graphs
                </Route>
                <Route path='/'>
                    {/* <NavBar />
                    <Main /> */} asd
                </Route>
            </Switch>
        </Router>
    )
}
export default App
