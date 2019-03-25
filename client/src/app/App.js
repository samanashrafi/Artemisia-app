import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "app/components/setAuthToken";
// import { setCurrentUser, logoutUser } from "./js/reducers/actions/authActions";
import PrivateRoute from "app/components/PrivateRoute";

// redux config
import { Provider } from "react-redux";
import store from "src/redux/store.js";

// set fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import "src/assets/sass/mian.scss";

import MainLayout from "app/layouts/MainLayout.js";

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
          <div className="container-main">
            {/* <Header />
            <Aside /> */}
            <Switch>
              {routeOptions.router.map(item => {
                // debugger;
                // if (item.layout == "main") {
                // <MainLayout />;

                // }
                return (
                  <MainLayout />,
                  (
                    <Route
                      key={Math.random() + "ROUTE_"}
                      exact={item.exact}
                      path={item.path}
                      component={item.component}
                    />
                  )
                );
              })}

              {routeOptions.private.map(item => {
                if (item.layout !== undefined && item.layout == "main") {
                  <MainLayout />;
                }
                return (
                  <PrivateRoute
                    key={Math.random() + "ROUTE_"}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                  />
                );
              })}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
