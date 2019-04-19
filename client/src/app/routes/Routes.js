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
// const Home = loadable({
//   loader: () => import("app/pages/home"),
//   loading: LoadingComponent
// });
const Dashboard = loadable({
  loader: () => import("app/pages/dashboard"),
  loading: LoadingComponent
});

export default {
  router: [
    {
      path: "/register",
      name: "register",
      rtl: "ثبت نام",
      component: Register,
      layout: "/empty",
      exact: true
    },
    {
      path: "/login",
      name: "login",
      rtl: "ورود کاربران",
      icon: "Login",
      component: Login,
      layout: "empty",
      exact: true
    }
  ],
  private: [
    {
      path: "/admin",
      name: "Dashboard",
      rtlName: "داشبورد",
      icon: "Dashboard",
      component: Dashboard,
      layout: "/admin",
      exact: true
    }
  ]
};
