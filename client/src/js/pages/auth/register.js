import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../reducers/actions/authActions";
import TextFieldGroup from "../../components/TextFieldGroup";
import {
  faUser,
  faEnvelope,
  faLock,
  faRedoAlt
} from "@fortawesome/free-solid-svg-icons";

// import "../../../sass/pages/auth/register.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    debugger;
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="center-box">
          <h2>ثبت نام </h2>
          <form noValidate onSubmit={this.onSubmit}>
            <TextFieldGroup
              name="name"
              type="name"
              placeholder="لطفا نام و نام خانوادگی خود را  وارد فرماببد."
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
              icon={faUser}
            />
            <TextFieldGroup
              name="email"
              type="email"
              placeholder="لطفا ایمیل خود را وارد فرمایید."
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              icon={faEnvelope}
            />
            <TextFieldGroup
              name="password"
              type="password"
              placeholder="لطفا کلمه عبور خود  را وارد فرمایید."
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              icon={faLock}
            />
            <TextFieldGroup
              name="password2"
              type="password"
              placeholder="لطفا مجدد کلمه عبور خود را وارد فرمایید"
              value={this.state.password2}
              onChange={this.onChange}
              error={errors.password2}
              icon={faRedoAlt}
            />

            <button type="sumit" className="btn btn-info btn-block mt-4">
              ثبت
            </button>
            {/* <input
              type="submit"
              placeholder=" "
             
            /> */}
          </form>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  // errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
