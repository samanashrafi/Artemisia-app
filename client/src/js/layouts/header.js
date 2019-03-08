import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBars,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

import checkDevices from "src/js/components/helpers";
import { logoutUser } from "src/redux/reducers/actions/authActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";

let menu = 0;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false
    };

    this.onClick = this.activeAside.bind(this);
    this.onActiveUserNavbar = this.onActiveUserNavbar.bind(this);
    this.onClick = this.onLogoutClick.bind(this);
  }

  activeAside() {
    var el = document.querySelector("aside");
    // this.setState({ menu: 1 });
    if (checkDevices.isMobile()) {
      if (menu == 1) {
        el.classList.remove("active-mobile");
        menu = 0;
      } else {
        el.classList.add("active-mobile");
        menu = 1;
      }
    } else {
      if (menu == 0) {
        el.classList.add("active");
        menu = 1;
      } else {
        el.classList.remove("active");
        menu = 0;
      }
    }
  }

  onActiveUserNavbar(e) {
    e.preventDefault();
    let el = document.getElementsByClassName("user-navbar")[0];

    if (this.state.navbar) {
      el.classList.remove("active");
      this.setState({ navbar: false });
    } else {
      el.classList.add("active");
      this.setState({ navbar: true });
    }
  }
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    //this.props.history.push("/login");
  }

  handleToggleModal() {
    this.setState({ showModal: true });
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div className="user-navbar" onClick={this.onActiveUserNavbar}>
        {user.name}
        <i>
          <FontAwesomeIcon icon={faAngleDown} />
        </i>
        <div className="list">
          <Link to="/register">
            <span> پروفایل </span>
          </Link>

          <a href="" onClick={this.onLogoutClick.bind(this)}>
            <span> خروج </span>
          </a>
        </div>
      </div>
    );

    const guestLinks = (
      <div className="user-login">
        <Link to="/register">
          <span>ثبت نام</span>
        </Link>
        <a />
        <Link to="/login">
          <span> ورود</span>
        </Link>
      </div>
    );

    return (
      <header>
        <div className="container-center">
          <div className="logo">
            <div className="img" />
            <h1>
              <span className="color-primary">تیکاف</span>
              <span>در دنیا خودرو بروز باشید.</span>
            </h1>
          </div>
          <div id="side-menu" className="side-menu" onClick={this.activeAside}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          {isAuthenticated ? authLinks : guestLinks}

          <div className="search">
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
            <span id="break" className="break-line" />
            <input name="txtSearch" type="test" placeholder="جستجو کنید..." />
          </div>
        </div>
      </header>
    );
  }
}
Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Header);
