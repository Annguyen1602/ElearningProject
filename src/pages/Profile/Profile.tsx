import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import eye from "../../assets/img/Color.png";
import * as Yup from "yup";
import { ACCESS_TOKEN, getStore, http } from "../../util/setting";

import axios from "axios";
// import { history } from "../..";
import { getProfileApi } from "../../redux/reducers/userReducer";
import { Navigate } from "react-router-dom";

import { RootState } from "../../redux/configStore";

export interface updateUser {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  email: string;
}

type Props = {};

export default function Profile({}: Props) {
  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  const [update, setUpdate] = useState<updateUser>({...userLogin});
  const dispatch = useDispatch();
  const [passwordType, setPassWordType] = useState("password");

  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e: any) => {
    setPasswordInput(e.target.value);
  };

  useEffect(() => {
    getProfileApi();
  }, []);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPassWordType("text");
      return;
    }
    setPassWordType("password");
  };

  
  let regexName = new RegExp(
    "[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹs]+$"
  );

  let regexPhone = new RegExp(
    "^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$"
  );
  let regexPass = new RegExp(
    "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$"
  );
  const frm = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
    },

    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("Tên tài khoản không được bỏ trống"),
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      hoTen: Yup.string()
        .required("Tên không được để trống")
        .matches(regexName, "Tên không đúng định dạng"),
      soDT: Yup.string()
        .required("Số điện thoại không được bỏ trống")
        .matches(regexPhone, "Số điện thoại không đúng định dạng"),
      matKhau: Yup.string()
        .required("Mật khẩu không được để trống")
        .min(6, "Mật khẩu phải từ 6-32 ký tự")
        .max(32, "Mật khẩu từ 6-32 ký tự")
        .matches(regexPass, "Mật khẩu không đúng định dạng"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  if (!getStore(ACCESS_TOKEN)) {
    //Nếu chưa đăng nhập => Chuyển hướng trang
    alert("Đăng nhập để vào trang này !");
    return <Navigate to="/dangnhap" />;
  }
  const handleChangeInput = (e: any) => {
    let { id, value } = e.target;

    let newValue: any = { ...update };
    newValue[id] = value;
    setUpdate(newValue);
  };

  

  
  return (
    <div className="update">
      <h2 className="title">Profile</h2>
      <div className="container d-flex h-100">
        <div className="image col-2"></div>
        <form
          className="form d-flex flex-wrap justify-content-start col-10 "
          onSubmit={frm.handleSubmit}
        >
          <div className="form-group col-md-10 mb-4 me-5">
            <div className="input-group d-flex flex-column">
              <h2>Email</h2>
              <input
                data-type="email"
                type="email"
                name="email"
                id="staticEmail"
                className="form-control input-sm w-100"
                placeholder="Email"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                value={userLogin.email}
              />
              {frm.errors.email ? (
                <span className="text-danger">{frm.errors.email} </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="form-group col-md-10 mb-4 me-5">
            <div className="input-group d-flex flex-column">
              <h2>Họ tên</h2>
              <input
                data-type="hoTen"
                type="text"
                name="hoTen"
                id="hoTen"
                className="form-control input-sm w-100"
                placeholder="Name"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                value={update.hoTen}
                onInput={handleChangeInput}
              />

              <span className="text-danger">{frm.errors.hoTen} </span>
            </div>
          </div>

          <div className="form-group col-md-10 mb-4 me-5">
            <div className="input-group d-flex flex-column">
              <h2>Số điện thoại</h2>
              <input
                data-type="phone"
                type="text"
                name="soDT"
                id="soDT"
                className="form-control input-sm w-100"
                placeholder="Phone"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                value={update.soDT}
                onInput={handleChangeInput}
              />
              <span className="text-danger">{frm.errors.soDT} </span>
            </div>
          </div>
          <div className="form-group col-md-10 mb-4 me-5">
            <div className="input-group d-flex flex-column">
              <h2>Mật khẩu</h2>
              <input
                data-type="password"
                type={passwordType}
                name="matKhau"
                id="matKhau"
                className="form-control input-sm w-100"
                placeholder="Password"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
                onInput={handlePasswordChange}
                value={update.matKhau}
              />

              <span className="text-danger">{frm.errors.matKhau} </span>
            </div>
            <button type="button" onClick={togglePassword}>
              {passwordType === "password" ? (
                <i className="bi bi-eye-slash"></i>
              ) : (
                <i className="bi bi-eye"></i>
              )}
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div className="container order d-flex align-items-start flex-wrap">
        <div
          className="nav flex-row nav-pills me-3 col-10"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-history-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-history"
            type="button"
            role="tab"
            aria-controls="v-pills-history"
            aria-selected="true"
          >
            Order History
          </button>
          <button
            className="nav-link"
            id="v-pills-favorite-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-favorite"
            type="button"
            role="tab"
            aria-controls="v-pills-favorite"
            aria-selected="false"
          >
            Favorite
          </button>
        </div>
        <div className="tab-content col-10" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-history"
            role="tabpanel"
            aria-labelledby="v-pills-history-tab"
          >
            {/* {userLogin?.ordersHistory?.map((orderItem, index) => {
              return (
                <div className="cover mt-2" key={index}>
                  <hr />
                  <p>+ Order has been placed on {orderItem.date}</p>
                  <table className="table">
                    <thead className="bg-light">
                      <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    {orderItem?.orderDetail?.map((item, index) => {
                      return (
                        <tbody key={index}>
                          <tr>
                            <td>{orderItem.id}</td>
                            <td>
                              <img
                                src={item.image}
                                alt={item.name}
                                height={50}
                              />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.price}$</td>
                            <td>{item.quantity}</td>
                            <td>
                              {(item.price * item.quantity).toLocaleString()}
                              $
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              );
            })} */}
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-favorite"
            role="tabpanel"
            aria-labelledby="v-pills-favorite-tab"
          >
            <div className="mt-2">
              <hr />

              {/* <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                  </tr>
                </thead>
                {userFavorite?.productsFavorite?.map((itemFavorite, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{itemFavorite.id}</td>
                        <td>{itemFavorite.name}</td>
                        <td>
                          <img
                            src={itemFavorite.image}
                            alt={itemFavorite.name}
                            height={50}
                          />
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
