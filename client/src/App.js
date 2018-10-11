import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

// redux config
import { Provider } from "react-redux";
import store from "./store";

//pages
import Header from "./js/layouts/header";
import Aside from "./js/layouts/aside";

library.add(faStroopwafel);

import "./sass/mian.scss";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Aside />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
