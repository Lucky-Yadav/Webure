import axios from "axios";
import {  REGISTER_REQ, SUCCESS_REQ } from "./actiontype";

export const registerreq = (payload) => {
  return {
    type: REGISTER_REQ,
    payload,
  };
};

export const sucessreq = (payload) => {
  return {
    type: SUCCESS_REQ,
    payload,
  };
};

export const registeruser = (payload) => (dispatch) => {
  console.log(payload, "after register");
  dispatch(registerreq());
  const requestParam = {
    method: "post",
    url: "https://reqres.in/api/login",
    header: {
      "Content-Type": "Application/json",
    },
    data: payload,
  };
  axios(requestParam)
    .then(
      (response) => console.log(response),
      dispatch(sucessreq("REGISTER SUCESSSS"))
    )
    .catch((err) => console.log(err));
};
