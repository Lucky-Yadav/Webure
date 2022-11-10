import axios from "axios";
import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGOUT_PAGE,
} from "./actiontype";

export const loginregister = (payload) => {
  return {
    type: LOGIN_REQ,
    payload,
  };
};

export const sucessLoginreq = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const logoutpage = () => {
  return {
    type: LOGOUT_PAGE,
  };
};

export const loginruser = (payload) => (dispatch) => {
  dispatch(loginregister());

  axios
    .post(`https://reqres.in/api/login`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      let pay = {
        token: response.token,
        username: payload.username,
      };
      console.log(response.data.token);
      dispatch(sucessLoginreq(pay));
    })
    .catch((err) => console.log(err));
};