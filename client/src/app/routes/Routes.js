import React from "react";

import loadable from "react-loadable";
const LoadingComponent = () => <h3>please wait...</h3>;

const Register = loadable({
  loader: () => import("app/pages/auth/register"),
  loading: LoadingComponent
});

const Login = loadable({
  loader: () => import("app/pages/auth/login"),
  loading: LoadingComponent
});
const Home = loadable({
  loader: () => import("app/pages/home"),
  loading: LoadingComponent
});
const Dashboard = loadable({
  loader: () => import("app/pages/dashboard"),
  loading: LoadingComponent
});

export default {
  router: [
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/register",
      component: Register,
      exact: true
    },
    {
      path: "/login",
      component: Login,
      exact: true
    }
  ],
  private: [
    {
      path: "/dashboard",
      component: Dashboard,
      exact: true
    }
  ]
};
