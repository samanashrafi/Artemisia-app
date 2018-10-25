import axios from "axios";
import { setAuthToken } from "../../components/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import { addClassById, removeClassById } from "../../components/helpers";

// User Register

export const registerUser = (userData, history) => dispatch => {
  addClassById("btn-register", "clicked");

  axios
    .post("/api/users/register", userData)
    .then(() => {
      history.push("/login");
    })
    .catch(err => {
      removeClassById("btn-register", "clicked");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Login - Get User Token

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      addClassById("btn-login", "clicked");

      // save to localStroge
      const { token } = res.data;
      //set token to Is
      localStorage.setItem("jwtToken", token);
      // Set Token to Auth header
      setAuthToken(token);
      // decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      removeClassById("btn-login", "clicked");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set  Logged in User

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//log out user
export const logoutUser = () => dispatch => {
  // Remove token from localStroge
  localStorage.removeItem("jwtToken");
  // remove auth header for future requests
  setAuthToken(false);
  // Set current use to {} will set isAuthenticated tp false
  dispatch(setCurrentUser({}));
};
