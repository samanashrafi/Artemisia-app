import React, { Component, Fragment } from "react";
import PropTypes from "Prop-types";
import MainLayout from "app/layouts/MainLayout.js";
import { connect } from "react-redux";
import TextFieldGroup from "app/components/TextFieldGroup";
import { loginUser } from "src/redux/reducers/actions/authActions";

import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <div className="login">
          <div className="center-box">
            <h2>ورود کاربران</h2>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                type="email"
                name="email"
                placeholder="ایمیل خود را وارد فرمایید."
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
                icon={faEnvelope}
              />

              <TextFieldGroup
                type="password"
                name="password"
                placeholder="ایمیل خود را وارد فرمایید."
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
                icon={faLock}
              />

              <button id="btn-login" className="btn">
                <span>ورود</span>
                <div className="spinner">
                  <div className="double-bounce1" />
                  <div className="double-bounce2" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
