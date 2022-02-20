import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import history from "./history";
import Wallet from "./Wallet";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    
                    <Route path="/LoginPage" component={LoginPage} />
                    <Route path="/Dashboard" component={Dashboard} />
                    <Route path="/Wallet" component={Wallet} />
                </Switch>
            </Router>
        )
    }
}