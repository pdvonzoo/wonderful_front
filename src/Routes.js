import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/common/Layout'
import { Admin, BookList, Home, Error, Auth, UserHistory, searchPage, BookDetail } from "./pages";

const Routes = () => {

  return (

    <Router>
      <Layout />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/error" exact component={Error} />
        <Route path="/userhistory" exact component={UserHistory} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/book" component={BookDetail} />
        <Route path="/search" component={searchPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
