import {
  ADMIN_GET_DATA_FAILURE,
  ADMIN_GET_DATA_REQUEST,
  ADMIN_GET_DATA_SUCCESS,
  ADMIN_POST_PRODUCT_SUCCESS,
  ADMIN_DELETE_PRODUCT_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getRequestProduct = () => {
  return { type: ADMIN_GET_DATA_REQUEST };
};
export const postProductSuccess = (payload) => {
  return { type: ADMIN_POST_PRODUCT_SUCCESS };
};

export const getSuccessProduct = (payload) => {
  return { type: ADMIN_GET_DATA_SUCCESS, payload };
};

export const getFailureProduct = () => {
  return { type: ADMIN_GET_DATA_FAILURE };
};

export const deleteProductSuccess = (payload) => {
  return { type: ADMIN_DELETE_PRODUCT_SUCCESS };
};

export const getProductData = (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .get(`http://localhost:3000/products`)
    .then((res) => {
      console.log(res.data);
      dispatch(getSuccessProduct(res.data));
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
export const addProduct = (payload) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .post("http://localhost:3000/products", payload)
    .then(() => {
      dispatch(postProductSuccess());
    })
    .catch((err) => {
      dispatch(getFailureProduct());
    });
};
export const deleteProductData = (id) => (dispatch) => {
  dispatch(getRequestProduct());
  axios
    .delete(`http://localhost:3000/products/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      dispatch(getFailureProduct());
    });
};
