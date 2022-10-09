import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeTeplate from "./templates/HomeTeplate/HomeTeplate";

import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import Register from "./pages/Register";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"; 
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import './assets/scss/styles.scss'



export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTeplate />}>
          
        </Route>
      </Routes>
      <Routes>
      <Route path="dangky" element={<Register />}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
