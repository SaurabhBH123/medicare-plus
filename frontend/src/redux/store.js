import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
//   import { reducer as appReducer } from "./App/app.reducer";
//   import { reducer as authReducer } from "./Auth/auth.reducer";
import { reducer as adminProductReducer } from "./AdminProductReducer/reducer";
import { reducer as ProductReducer } from "./Product/reducer";
// import { reducer as CartReducer } from "./Cart/reducer";
import { reducer as SingleProductReducer } from "./ProductDetails/reducer";
import thunk from "redux-thunk";

const root_reducer = combineReducers({
  adminProductReducer,
  ProductReducer,
//   CartReducer,
  SingleProductReducer,
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);
