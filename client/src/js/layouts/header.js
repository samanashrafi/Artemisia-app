import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";

class header extends Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    // var el = document.getElementById("break");
    // el.classList.add("focus");
  }
  render() {
    return (
      <div>
        <header>
          <div className="container-center">
            <div className="logo">
              <div className="img" />
              <h1>
                <span className="color-primary">تیکاف</span>
                <span>در دنیا خودرو بروز باشید.</span>
              </h1>
            </div>
            <div className="user-login">
              <span>ثبت نام</span>
              <span />
              <span>ورود</span>
            </div>
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
        </header>
        <aside>
          <ul className="menu">
            <li>
              <a href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                صحفه اصلی
              </a>
            </li>
            <li>
              <a href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                اخبار
              </a>
            </li>
            <li>
              <a href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                نقد و بررسی
              </a>
            </li>
            <li>
              <a href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                حقایق جالب
              </a>
            </li>
            <li>
              <a href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                درباره ما
              </a>
            </li>
            <li>
              <a href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                تماس با ما
              </a>
            </li>
          </ul>

          <div className="social-network">
            <p className="dec color-secondary">
              ما را در شبکه های اجتماعی دنبال کنید
            </p>

            <ul>
              <li>
                <a id="facebook" href="/">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a id="insta" href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a id="telegram" href="/">
                  <FontAwesomeIcon icon={faTelegramPlane} />
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default header;
