import axios from "axios";
import * as types from "./actionTypes";

export const getProductsdetails = (id) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS_DETAILS_REQUEST });
  return axios
    .get(`https://kind-jade-eagle-sari.cyclic.app/productPage/${id}`)
    .then((res) => {
      return dispatch({
        type: types.GET_PRODUCTS_DETAILS_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      return dispatch({
        type: types.GET_PRODUCTS_DETAILS_FAILURE,
        payload: err,
      });
    });
};
