import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

//pages
import Header from "./js/layouts/header";
import Aside from "./js/layouts/aside";

library.add(faStroopwafel);

import "./sass/mian.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Aside />
      </div>
    );
  }
}

export default App;
