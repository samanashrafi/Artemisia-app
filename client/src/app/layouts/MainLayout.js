import React, { Component, Fragment } from "react";
//layout
import Header from "app/layouts/header";
import Aside from "app/layouts/aside";
class MainLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Aside />
      </Fragment>
    );
  }
}

export default MainLayout;
