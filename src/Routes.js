import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from './components/common/Layout'
import { Admin, BookList, Home, Error, Signin, Signup, UserHistory, searchPage, MyBooksPage } from "./pages";

const Routes = () => {

  return (

    <Router>
      <Layout />
      <br />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/error" exact component={Error} />
        <Route path="/userhistory" exact component={UserHistory} />
        <Route path="/search" component={searchPage} />
        <Route path="/admin" component={Admin} />
        <Route path="/myBooksRoom" component={MyBooksPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
