import {
  ADMIN_GET_USER_FAILURE,
  ADMIN_GET_USER_REQUEST,
  ADMIN_GET_USER_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getRequestUser = () => {
  return { type: ADMIN_GET_USER_REQUEST };
};
export const getUserSuccess = (payload) => {
  return { type: ADMIN_GET_USER_SUCCESS, payload };
};
export const getFailureUser = () => {
  return { type: ADMIN_GET_USER_FAILURE };
};

export const getUsersData = (dispatch) => {
  dispatch(getRequestUser());
  axios
    .get(`https://kind-jade-eagle-sari.cyclic.app/auth`)
    .then((res) => {
      dispatch(getUserSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getFailureUser());
    });
};
