import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import AuthContextProvider from "./Context/AuthContext";
import SearchContextProvider from "./Context/SearchContext";
import CartContextProvider from "./Context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SearchContextProvider>
    <CartContextProvider>
      <AuthContextProvider>
        <Provider store={store}>
          <ChakraProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ChakraProvider>
        </Provider>
      </AuthContextProvider>
    </CartContextProvider>
  </SearchContextProvider>
);
