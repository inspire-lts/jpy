import React, { Component } from 'react'
import { Route, Switch, Redirect} from "react-router-dom"
import Image from './Images'
import Home from "./Home.js"
export default class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/images' component={Image}></Route>
                    <Redirect to='/home'></Redirect>
                </Switch>
            </div>
        )
    }
}
