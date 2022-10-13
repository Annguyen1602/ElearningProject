import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import eye from "../../assets/img/Color.png";
import * as Yup from "yup";
import { ACCESS_TOKEN, getStore, http } from "../../util/setting";

import axios from "axios";
// import { profile } from "../..";
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
  const [update, setUpdate] = useState<updateUser>({ ...userLogin });
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
     
      <div className="container order d-flex align-items-start flex-wrap justify-content-around ">
        <div
          className="nav flex-row nav-pills me-3 col-10"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active "
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="true"
          >
            Thông tin cá nhân
          </button>
          <button
            className="nav-link"
            id="v-pills-course-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-course"
            type="button"
            role="tab"
            aria-controls="v-pills-course"
            aria-selected="false"
          >
            Khoá học của tôi
          </button>
        </div>
        <div className="tab-content col-10 border" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <div className="contain d-flex h-100 w-100 ">
              
              <form
                className="form d-flex flex-wrap justify-content-between"
                onSubmit={frm.handleSubmit}
              >
                <div className="form-group col-md-10 mb-4 me-5">
                  <div className="input-group d-flex flex-column">
                    <h2>Email</h2>
                    <input
                      data-type="email" 
                      type="email"
                      name="email"
                      className="form-control input-sm w-100"
                      onChange={frm.handleChange}
                      placeholder={userLogin.email}
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
                    <h2>Tài khoản</h2>
                    <input
                      type="text"
                      name="taiKhoan"
                      id="taiKhoan"
                      className="form-control input-sm w-100"
                      aria-label="Disabled input example"
                      disabled
                      onChange={frm.handleChange}
                      placeholder={userLogin.taiKhoan}
                    />
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
                      onChange={frm.handleChange}
                      placeholder={userLogin.hoTen}
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
                      placeholder={userLogin.soDT}
                      onChange={frm.handleChange}
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
                      placeholder={userLogin.matKhau}
                      onChange={frm.handleChange}
                      onInput={handlePasswordChange}
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
                <div className="d-flex justify-content-between w-100 mb-5  mt-5">
              <div className="submit">
                <button type="submit" className="btn"  >
                  Cập nhật
                </button>
              </div>
              
             
            </div>
              </form>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="v-pills-course"
            role="tabpanel"
            aria-labelledby="v-pills-course-tab"
          >
            <div className="mt-2">
              <hr />

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
