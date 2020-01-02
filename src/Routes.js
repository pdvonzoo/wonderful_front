import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Error from "./utils/Error";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/error" exact component={Error} />
            </Switch>
        </Router>
    );
};

export default Routes;