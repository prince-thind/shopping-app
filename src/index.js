import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//todo
//refactor code
//improve ui
// implement fake data api
// implement image fetch api
// create a server for hiding the apis
//seperate page for each item
