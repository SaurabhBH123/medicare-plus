import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = (url,params) => (dispatch) => {
  console.log(url,params)
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
  .get(`${url}`,params)
    .then((res) => {
      return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};
