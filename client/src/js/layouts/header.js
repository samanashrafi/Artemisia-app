import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import checkDevices from "../components/helpers";

import PropTypes from "prop-types";
import SimpleModalLauncher from "./SimpleModalLauncher";
import Modal from "../components/model";

let menu = 0;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.activeAside.bind(this);
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
  onFocus() {
    // var el = document.getElementById("break");
    // el.classList.add("focus");
  }

  handleToggleModal() {
    this.setState({ showModal: true });
  }
  render() {
    let elLogin, showMy;
    if (checkDevices.isMobile()) {
      elLogin = (
        <div className="user-login">
          <i className="mobile">
            <FontAwesomeIcon icon={faUser} />
          </i>
        </div>
      );
    } else {
      elLogin = (
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
    }

    // if (this.state.showModal) {
    //   showMy = (

    //   );
    // }
    return (
      <header>
        <div className="container-center">
          <div id="side-menu" className="side-menu" onClick={this.activeAside}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="logo">
            <div className="img" />
            <h1>
              <span className="color-primary">تیکاف</span>
              <span>در دنیا خودرو بروز باشید.</span>
            </h1>
          </div>
          {elLogin}
          <div className="search">
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
            <span id="break" className="break-line" />
            <input
              name="txtSearch"
              type="test"
              placeholder="جستجو کنید..."
              onFocus={this.onFocus()}
            />
          </div>
        </div>
        {/* <button
            type="button"
            className="modalButton"
            onClick={() => this.handleToggleModal()}
          >
            show modal
          </button>
          <SimpleModalLauncher buttonLabel="Open text modal">
            <div className="textModal">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi
                faucibus quam, sollicitudin posuere massa lacus cursus ligula.
                Quisque vel turpis a quam posuere lobortis. Aenean risus nunc,
                pretium eu massa tincidunt, dignissim tincidunt arcu. Integer et
                mauris vestibulum, pharetra eros nec, feugiat orci.
              </p>
            </div>
          </SimpleModalLauncher>
          <Modal
            buttonLabel="Open text modal"
            onCloseRequest={() => this.handleToggleModal()}
            showModal={this.state.showModal}
          >
            <div className="textModal">
              <h2>Lorem ipsum dolor sit amet</h2>
              <p>
                Nullam tincidunt, nisl eget vestibulum rhoncus, elit nisi
                faucibus quam, sollicitudin posuere massa lacus cursus ligula.
                Quisque vel turpis a quam posuere lobortis. Aenean risus nunc,
                pretium eu massa tincidunt, dignissim tincidunt arcu. Integer et
                mauris vestibulum, pharetra eros nec, feugiat orci.
              </p>
            </div>
          </Modal> */}
      </header>
    );
  }
}
Header.propTypes = {
  sheet: PropTypes.object,
  classes: PropTypes.object
};

export default Header;
