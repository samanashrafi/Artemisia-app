import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "app/components/setAuthToken";
// import { setCurrentUser, logoutUser } from "./js/reducers/actions/authActions";
import PrivateRoute from "app/components/PrivateRoute";
import loadable from "react-loadable";

// redux config
import { Provider } from "react-redux";
import store from "src/redux/store.js";

// set fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import "src/assets/sass/mian.scss";

//layout
import Header from "app/layouts/header";
import Aside from "app/layouts/aside";

//pages
import routeOptions from "app/routes/Routes.js";

library.add(faStroopwafel);

// Check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}
class App extends Component {
  componentDidMount() {
    // let windowHight = window.innerHeight - 120;
    // document
    //   .getElementsByClassName("container-main")[0]
    //   .setAttribute("style", "height:" + windowHight + "px");
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Aside />
            <div className="container-main">
              <Switch>
                {routeOptions.router.map(({ path, component, exact }, i) => (
                  <Route
                    key={Math.random() + "ROUTE_"}
                    exact={exact}
                    path={path}
                    component={component}
                  />
                ))}
                {routeOptions.private.map(({ path, component, exact }, i) => (
                  <PrivateRoute
                    key={Math.random() + "ROUTE_"}
                    exact={exact}
                    path={path}
                    component={component}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
