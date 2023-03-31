import * as types from "./auth.types";

const authData = {
    data: {},
    isLoadind: false,
    isError: false,
}

const reducer = (state = authData, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.AUTH_DATA_REQUEST: {
            return { ...state, isLoadind: true };
        }
        case types.AUTH_DATA_SUCCESS: {
            return { ...state, isLoadind: false, data: payload };
        }
        case types.AUTH_DATA_ERROR: {
            return { ...state, isLoadind: false, isError: true };
        }
        default: {
            return state;
        }
    }
}


export { reducer };