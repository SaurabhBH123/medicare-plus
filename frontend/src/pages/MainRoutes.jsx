import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardMain from "../pages/Admin/DashboardMain";
import ProductList from "../pages/Admin/ProductList";
import AdminAddProduct from "../pages/Admin/AdminAddProduct";
import UserList from "./Admin/UserList";
import AdminEditProduct from "./Admin/AdminEditProduct";
import Product from "./Products/Product";
import SingleProduct from "./SingleProduct/SingleProduct";
import { Cart } from "./Cart/Cart";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<DashboardMain />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/add-product" element={<AdminAddProduct />}></Route>
        <Route path="/edit-product" element={<AdminEditProduct />}></Route>
        <Route path="/user-list" element={<UserList />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="*" element={<PageNotFound />}></Route> */}
      </Routes>
    </div>
  );
};

export default MainRoute;
