import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = (value) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_REQUEST });
  return axios
    .get(`http://localhost:4300/productPage`,{params:{category:value}})
    .then((res) => {
      return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: res });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: err });
    });
};
