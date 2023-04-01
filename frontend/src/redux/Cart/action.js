import axios from "axios";
import * as types from "./actionTypes";

export const getCarts = () => (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });
  return axios
    .get(`https://localhost:4300/cart`)
    .then((res) => {
      return dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: types.GET_CART_FAILURE, payload: err });
    });
};

export const updateCart = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_REQUEST });
  return axios
    .patch(`https://localhost:4300/cart/update/${id}`, payload)
    .then((res) => {
      return dispatch({ type: types.UPDATE_CART_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.UPDATE_CART_FAILURE, payload: err });
    });
};

export const deleteCart = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_REQUEST });
  return axios
    .delete(`https://localhost:4300/cart/delete/${id}`)
    .then((res) => {
      return dispatch({ type: types.DELETE_CART_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.DELETE_CART_FAILURE, payload: err });
    });
};

export const addAddress = (payload) => (dispatch) => {
  return dispatch({ type: types.ADD_ADDRESS_REQUEST, payload });
};

export const addCart = (product) => (dispatch) => {
  dispatch({ type: types.ADD_CART_REQUEST });
  return axios
    .post(`http://localhost:4300/cart/addmany`, [
      {product}])
    .then((res) => {
      dispatch({ type: types.ADD_CART_SUCCESS, payload: res.res });
    })
    .catch((err) => {
      dispatch({ type: types.ADD_CART_FAILURE, payload: err });
    });
};
