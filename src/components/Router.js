import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from '../App'
import Drink from './Drink'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={ App } exact />
            <Route path='/drink/:id' component={ Drink } /> 
        </Switch>
    </BrowserRouter>
)


export default Router