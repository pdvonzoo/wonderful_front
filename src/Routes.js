import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Layout from './components/common/Layout'
import { Admin, Home, Error404, Auth, UserHistory, BookDetail, searchPage, MyBooksPage } from "./pages";

=======
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserHistory from "./UserBooks/UserHistory";
import adminUser from "./adminUser/adminUser";
>>>>>>> 7aeea28... ysh3
const Routes = () => {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/error" exact component={Error404} />
        <Route path="/userhistory" exact component={UserHistory} />
<<<<<<< HEAD
        <Route path="/book" component={BookDetail} />
        <Route path="/search/:id" component={searchPage} />
        <Route path="/admin" component={Admin} />
        <Route path="/myBooksRoom" component={MyBooksPage} />
=======
        <Route path="/admin" component={adminUser} />
>>>>>>> 7aeea28... ysh3
      </Switch>
    </Router>
  );
};

export default Routes;
