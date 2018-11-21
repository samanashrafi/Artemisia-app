import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./js/components/setAuthToken";
import { setCurrentUser, logoutUser } from "./js/reducers/actions/authActions";
import PrivateRoute from "./js/components/PrivateRoute";
import loadable from "react-loadable";

// redux config
import { Provider } from "react-redux";
import store from "./store";

// set fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
// import "./sass/mian.scss";
import "src/sass/mian.scss";

//layout
import Header from "./js/layouts/header";
import Aside from "./js/layouts/aside";
import Login from "./js/pages/auth/Login";

//pages
import SwitchUrl from "./js/components/switchUrl";
const LoadingComponent = () => <h3>please wait...</h3>;

const AsyncRegisterComponent = loadable({
  loader: () => import("./js/pages/auth/register"),
  loading: LoadingComponent
});
const AsyncSelectCityComponent = loadable({
  loader: () => import("./js/pages/home/SelectCity"),
  loading: LoadingComponent
});

const AsyncSelectAdsComponent = loadable({
  loader: () => import("./js/pages/home/SelectAds"),
  loading: LoadingComponent
});
const AsyncLoginComponent = loadable({
  loader: () => import("./js/pages/auth/Login"),
  loading: LoadingComponent
});

const AsyncDashboardComponent = loadable({
  loader: () => import("./js/pages/dashboard/dashboard"),
  loading: LoadingComponent
});

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
    window.location.href = "/login";
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
              {/* <SwitchUrl /> */}
              
             
              <Switch>
                <Route
                  exact
                  path="/:name"
                  component={AsyncSelectAdsComponent}
                />
              </Switch>
              <Switch>
                <Route exact path="/" component={AsyncSelectCityComponent} />
              </Switch>
              <Switch>
                <Route exact path="/login" component={AsyncLoginComponent} />
              </Switch>
              <Switch>
                <Route exact path="/register" component={AsyncRegisterComponent} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/dashboard"
                  component={AsyncDashboardComponent}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
