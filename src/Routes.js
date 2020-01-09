import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/common/Layout'
import { Admin, Home, Error404, Auth, UserHistory, BookDetail, searchPage, MyBooksPage } from "./pages";

const Routes = () => {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/error" exact component={Error404} />
        <Route path="/userhistory" exact component={UserHistory} />
        <Route path="/book" component={BookDetail} />
        <Route path="/search/:id" component={searchPage} />
        <Route path="/admin" component={Admin} />
        <Route path="/myBooksRoom" component={MyBooksPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
