import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardMain from "../pages/Admin/DashboardMain";
import ProductList from "../pages/Admin/ProductList";
import AdminAddProduct from "../pages/Admin/AdminAddProduct";
import UserList from "./Admin/UserList";
import AdminEditProduct from "./Admin/AdminEditProduct";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<DashboardMain />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/add-product" element={<AdminAddProduct />}></Route>
        <Route path="/edit-product" element={<AdminEditProduct />}></Route>
        <Route path="/user-list" element={<UserList />} />

        {/* <Route path="*" element={<PageNotFound />}></Route> */}
      </Routes>
    </div>
  );
};

export default MainRoute;
