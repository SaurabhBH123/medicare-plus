import {
  ADMIN_GET_USER_FAILURE,
  ADMIN_GET_USER_REQUEST,
  ADMIN_GET_USER_SUCCESS,
} from "./actionType";

const inti = {
  isLoading: false,
  isError: false,
  products: [],
  users: [],
};

export const reducer = (state = inti, { type, payload }) => {
  switch (type) {
    case ADMIN_GET_USER_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_GET_USER_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    case ADMIN_GET_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
