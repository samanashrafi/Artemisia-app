import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import {setAuthToken} from './js/components/setAuthToken';
import { setCurrentUser, logoutUser } from './js/reducers/actions/authActions';

// redux config
import { Provider } from "react-redux";
import store from "./store";

// set fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import "./sass/mian.scss";



//layout
import Header from "./js/layouts/header";
import Aside from "./js/layouts/aside";

//pages
import Register from "./js/pages/auth/register";
import Login from "./js/pages/auth/login";

library.add(faStroopwafel);


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}

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
