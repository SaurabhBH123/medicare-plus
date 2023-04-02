import {
  ADMIN_ADD_ORDER_FAILURE,
  ADMIN_ADD_ORDER_REQUEST,
  ADMIN_ADD_ORDER_SUCCESS,
  ADMIN_GET_ORDER_FAILURE,
  ADMIN_GET_ORDER_REQUEST,
  ADMIN_GET_ORDER_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getRequestOrder = () => {
  return { type: ADMIN_GET_ORDER_REQUEST };
};
export const getOrderSuccess = (payload) => {
  return { type: ADMIN_GET_ORDER_SUCCESS, payload };
};
export const getFailureOrder = () => {
  return { type: ADMIN_GET_ORDER_FAILURE };
};

export const getOrderData = (dispatch) => {
  dispatch(getRequestOrder());
  axios
    .get(`https://kind-jade-eagle-sari.cyclic.app/orders`)
    .then((res) => {
      dispatch(getOrderSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getFailureOrder());
    });
};

export const addOrderData = (products) => async(dispatch) => {
  dispatch({type:ADMIN_ADD_ORDER_REQUEST});
  console.log(products)
  await axios
    .post(`https://kind-jade-eagle-sari.cyclic.app/orders/addmany`,products)
    .then((res) => {
      console.log(res)
      dispatch({type:ADMIN_ADD_ORDER_SUCCESS,payload:res.data});
    })
    .catch((e) => {
      dispatch({type:ADMIN_ADD_ORDER_FAILURE});
    });
};
