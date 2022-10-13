import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeTeplate from "./templates/HomeTeplate/HomeTeplate";

import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Register from "./pages/Register/Register";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"; 
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import './assets/scss/styles.scss'
import Demo from "./pages/Register/demo";
import LogIn from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";





const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter >
      <Routes>
        <Route path="" element={<HomeTeplate />}>
          <Route path="demo" element={<Demo/>}></Route>
          <Route path="profile" element={<Profile/>}></Route>
          
        </Route>
      </Routes>
      <Routes>
      <Route path="dangky" element={<Register />}></Route>
      <Route path="dangnhap" element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
