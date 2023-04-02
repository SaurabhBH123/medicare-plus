import * as types from "./actionTypes";

const initialState = {
  carts: [],
  isLoading: false,
  isError: false,
  address: [],
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_CART_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_CART_SUCCESS:
      // console.log(payload)
      return {
        ...state,
        isLoading: false,
        isError: false,
        carts: payload,
      };

    case types.GET_CART_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case types.ADD_ADDRESS_REQUEST:
      return {
        ...state,
        address: [{ ...payload }],
      };
      case types.ADD_CART_REQUEST:
        return { ...state, isLoading: true };
  
      case types.ADD_CART_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          carts: [...state.carts,payload],
        };
  
      case types.ADD_CART_FAILURE:
        return { ...state, isLoading: false, isError: true };
  
        case types.DELETE_CART_SUCCESS:
          const res = state.carts.filter((el) => (
            el.id !== payload
          ))
          return {
            ...state,
            isLoading: false,
            isError: false,
            carts: res
          }
    default:
      return state;
  }
};
