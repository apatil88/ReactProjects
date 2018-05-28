import axios from "axios";
import { browserHistory } from "react-router";
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from "./types";

const ROOT_URL = "http://localhost:3090";

export function signinUser({ email, password }) {
  //Generally, action creators return an object. However, since we are using redux thunk, we return a function.
  //This function gives us access to the dispatch method allowing us to dispatch actions at any point of time we want
  return function(dispatch) {
    //Submit email/password to server
    axios
      .post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //if request is good
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - save the JWT token
        localStorage.setItem("token", response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push("/feature"); //programmatic navigation
      })
      .catch(() => {
        //if request is bad
        // - show an error to the user
        dispatch(authError("Bad login info"));
      });
  };
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    //Submit email/password to server
    axios
      .post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        //if request is good
        // - update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - save the JWT token
        localStorage.setItem("token", response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push("/feature"); //programmatic navigation
      })
      .catch(error => dispatch(authError(error.response.data.error)));
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  //remove the JWT token from localStorage
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    //Making authenticated API requests
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem("token") }
      })
      .then(response => {
        //Handling data from authenticated requests
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  };
}
