import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import "./sass/mian.scss";

// redux config
import { Provider } from "react-redux";
import store from "./store";

//layout
import Header from "./js/layouts/header";
import Aside from "./js/layouts/aside";

//pages
import Register from "./js/pages/auth/register";
import Login from "./js/pages/auth/login";

library.add(faStroopwafel);

class App extends Component {
  componentDidMount() {
    let windowHight = window.innerHeight - 120;
    document
      .getElementsByClassName("container-main")[0]
      .setAttribute("style", "height:" + windowHight + "px");
  }
  render() {
    // elApp.style.color = "blue";

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Aside />
            <div className="container-main">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
