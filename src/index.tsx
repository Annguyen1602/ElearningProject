import React from "react";
import ReactDOM from "react-dom/client";
import HomeTemplate from "./templates/HomeTemplate";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/styles.scss";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Category from "./pages/Category/Category";
import Search from "./pages/Search/Search";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path="/category" element={<Category />}>
            <Route path=":maDanhMuc" element={<Category />}></Route>
          </Route>
          <Route path="/detail">
            <Route path=":maKhoaHoc" element={<Detail />}></Route>
          </Route>
          <Route path="/search" element={<Search />}>
            <Route path=":keyword" element={<Search />}></Route>
          </Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
