import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware)
);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
