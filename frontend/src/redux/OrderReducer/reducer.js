import {
  ADMIN_ADD_ORDER_FAILURE,
  ADMIN_ADD_ORDER_REQUEST,
  ADMIN_ADD_ORDER_SUCCESS,
  ADMIN_GET_ORDER_FAILURE,
  ADMIN_GET_ORDER_REQUEST,
  ADMIN_GET_ORDER_SUCCESS,
} from "../OrderReducer/actionType";

const inti = {
  isLoading: false,
  isError: false,
  orders: [],
};

export const reducer = (state = inti, { type, payload }) => {
  switch (type) {
    case ADMIN_GET_ORDER_FAILURE:
      return { ...state, isLoading: true };
    case ADMIN_GET_ORDER_SUCCESS:
      return { ...state, isLoading: false, orders: payload };
    case ADMIN_GET_ORDER_REQUEST:
      return { ...state, isLoading: false, isError: true };
    case ADMIN_ADD_ORDER_FAILURE:
      return { ...state, isLoading: true };
    case ADMIN_ADD_ORDER_SUCCESS:
      return { ...state, isLoading: false, orders: [...state.orders,payload] };
    case ADMIN_ADD_ORDER_REQUEST:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
