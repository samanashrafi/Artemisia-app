import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faNewspaper,
  faChartLine,
  faEdit,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faTelegramPlane
} from "@fortawesome/free-brands-svg-icons";

class aside extends Component {
  render() {
    return (
      <div>
        <aside>
          <ul className="menu">
            <li>
              <a id="home" href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                صحفه اصلی
              </a>
            </li>
            <li>
              <a id="news" href="/">
                <span>
                  <FontAwesomeIcon icon={faNewspaper} />
                </span>
                اخبار
              </a>
            </li>
            <li>
              <a id="review" href="/">
                <span>
                  <FontAwesomeIcon icon={faChartLine} />
                </span>
                نقد و بررسی
              </a>
            </li>
            <li>
              <a id="facts" href="/">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                حقایق جالب
              </a>
            </li>
            <li>
              <a id="aboutme" href="/">
                <span>
                  <FontAwesomeIcon icon={faEdit} />
                </span>
                درباره ما
              </a>
            </li>
            <li>
              <a id="contact" href="/">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                تماس با ما
              </a>
            </li>
          </ul>

          <div className="social-network">
            <p className="dec ">ما را در شبکه های اجتماعی دنبال کنید</p>

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
export default aside;
