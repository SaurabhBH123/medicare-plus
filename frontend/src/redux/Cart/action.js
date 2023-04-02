import axios from "axios";
import * as types from "./actionTypes";

export const getCarts = (token) =>async (dispatch) => {
  dispatch({ type: types.GET_CART_REQUEST });
  await axios.get(`http://localhost:4300/cart`,{headers:{"Authorization": `Bearer ${token}`}})
    .then((res) => {
      // console.log(res.data)
      dispatch({ type: types.GET_CART_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      // console.log(err)
      dispatch({ type: types.GET_CART_FAILURE, payload: err });
    });
};

export const updateCart = (id, payload) => (dispatch) => {
  dispatch({ type: types.UPDATE_CART_REQUEST });
  return axios
    .patch(`http://localhost:4300/cart/update/${id}`, payload)
    .then((res) => {
      return dispatch({ type: types.UPDATE_CART_SUCCESS });
    })
    .catch((err) => {
      return dispatch({ type: types.UPDATE_CART_FAILURE, payload: err });
    });
};

export const deleteCart = (id,token) =>async (dispatch) => {
  dispatch({ type: types.DELETE_CART_REQUEST });
  await axios
    .delete(`http://localhost:4300/cart/delete/${id}`,{headers:{"Authorization": `Bearer ${token}`}})
    .then((res) => {
      console.log(res)
      dispatch({ type: types.DELETE_CART_SUCCESS });
    })
    .catch((err) => {
      console.log(err)
      dispatch({ type: types.DELETE_CART_FAILURE, payload: err });
    });
};

export const addAddress = (payload) => (dispatch) => {
  return dispatch({ type: types.ADD_ADDRESS_REQUEST, payload });
};

export const addCart = (product,token) => (dispatch) => {
  dispatch({ type: types.ADD_CART_REQUEST });
  return axios
    .post(`http://localhost:4300/cart/addmany`,product,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    .then((res) => {
      // console.log(res)
      dispatch({ type: types.ADD_CART_SUCCESS, payload: res.data[0] });
    })
    .catch((err) => {
      // console.log(err)
      dispatch({ type: types.ADD_CART_FAILURE, payload: err });
    });
};
