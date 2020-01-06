import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/common/Layout'
import { Admin, BookList, Home, Error, Auth, UserHistory, searchPage } from "./pages";

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

        <Route path="/search" component={searchPage} />
        <Route path="*" component={Home} />

      </Switch>
    </Router>
  );
};

export default Routes;
