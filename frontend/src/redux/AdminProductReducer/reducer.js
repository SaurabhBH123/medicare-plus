import {
  ADMIN_GET_DATA_FAILURE,
  ADMIN_GET_DATA_REQUEST,
  ADMIN_GET_DATA_SUCCESS,
  ADMIN_GET_SINGLE_DATA_SUCCESS,
  ADMIN_POST_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
} from "./actionType";

const inti = {
  isLoading: false,
  isError: false,
  products: [],
  singleProduct: [],
};

export const reducer = (state = inti, { type, payload }) => {
  switch (type) {
    case ADMIN_GET_DATA_REQUEST:
      return { ...state, isLoading: true };
    case ADMIN_GET_DATA_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case ADMIN_GET_SINGLE_DATA_SUCCESS:
      return { ...state, isLoading: false, singleProduct: payload };
    case ADMIN_POST_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    case ADMIN_GET_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case PATCH_PRODUCT_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
