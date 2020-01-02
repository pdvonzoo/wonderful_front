import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Error from "./utils/Error";
import UserHistory from "./UserBooks/UserHistory";
import adminUser from "./adminUser/adminUser";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/error" exact component={Error} />
                <Route path="/userhistory" exact component={UserHistory} />
                <Route path="/admin" component={adminUser} />
            </Switch>
        </Router>
    );
};

export default Routes;