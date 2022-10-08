import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import eye from "../../assets/img/Color.png";
import * as Yup from "yup";

import axios from "axios";
import { history } from "..";

import image from '../assets/img/image.png'

type Props = {};

export default function Register({}: Props) {
  const dispatch = useDispatch();
  const [passwordType, setPassWordType] = useState("password");
  const [passwordReType, setPassWordReType] = useState("password");

  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (e: any) => {
    setPasswordInput(e.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPassWordType("text");
      return;
    }
    setPassWordType("password");
  };
  const toggleRePassword = () => {
    if (passwordReType === "password") {
      setPassWordReType("text");
      return;
    }
    setPassWordReType("password");
  };

  //   interface formModel{
  //     email: string,
  //       name: string,
  //       phone: number,
  //       password: string,
  //       passconfirm: string,
  //       gender: true,

  //   }
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
      account: "",
      email: "",
      name: "",
      phone: "",
      password: "",
      passconfirm: "",
    },

    validationSchema: Yup.object().shape({
      account: Yup.string().required("Tên tài khoản không được bỏ trống"),
      email: Yup.string()
        .required("Email không được bỏ trống")
        .email("Email không đúng định dạng"),
      name: Yup.string()
        .required("Tên không được để trống")
        .matches(regexName, "Tên không đúng định dạng"),
      phone: Yup.string()
        .required("Số điện thoại không được bỏ trống")
        .matches(regexPhone, "Số điện thoại không đúng định dạng"),
      password: Yup.string()
        .required("Mật khẩu không được để trống")
        .min(6, "Mật khẩu phải từ 6-32 ký tự")
        .max(32, "Mật khẩu từ 6-32 ký tự")
        .matches(regexPass, "Mật khẩu không đúng định dạng"),
      passconfirm: Yup.string().when("password", {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Không trùng khớp mật khẩu đã nhập"
        ),
      }),
    }),
    onSubmit: (values) => {
      //   let newAcc = new Account();
      //   newAcc.email = values.email;
      //   newAcc.password = values.password;
      //   newAcc.name = values.name;
      //   newAcc.gender = values.gender;
      //   newAcc.phone = values.phone;
      //   if (newAcc.gender === "true") {
      //     newAcc.gender = true;
      //   } else {
      //     newAcc.gender = false;
      //   }
      //   (async () => {
      //     try {
      //       const result = await http.post("/Users/signup", newAcc);
      //       console.log(newAcc);
      //       alert(result.data.message);
      //       if (window.confirm("Bạn có muốn chuyển đến trang Đăng nhập?")) {
      //         history.push("/login");
      //       }
      //     } catch (error) {
      //       alert(error.response.data.message);
      //       return;
      //     }
      //   })();
    },
  });
  //   const handleRadioButtons = (e: any) => (frm.values.gender = e.target.value);

  return (
    <div className="d-flex container">
        <div className="col-6">
            <img src={image} alt="..." className="w-100" height={1000}/>

        </div>
      <section className="register col-6">
        <div className="contain">
          <h2>ĐĂNG KÝ</h2>
          <hr />
          <form
            className="form d-flex flex-wrap justify-content-between"
            onSubmit={frm.handleSubmit}
          >
            <div className="form-group col-md-10 mb-4">
              <div className="input-group d-flex flex-column">
                <h2>Tài khoản</h2>
                <input
                  type="text"
                  name="account"
                  id="account"
                  className="form-control input-sm w-100"
                  placeholder="Tài khoản"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                {frm.errors.account ? (
                  <span className="text-danger">{frm.errors.account} </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="form-group col-md-10 mb-4">
              <div className="input-group d-flex flex-column">
                <h2>Mật khẩu</h2>
                <input
                  type={passwordType}
                  name="password"
                  className="form-control input-sm w-100"
                  placeholder="Password"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                  onInput={handlePasswordChange}
                  value={passwordInput}
                />

                <span className="text-danger">{frm.errors.password} </span>
              </div>
              <button type="button" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
            <div className="form-group col-md-10 mb-4">
              <div className="input-group d-flex flex-column">
                <h2>Nhập lại mật khẩu</h2>
                <input
                  type={passwordReType}
                  name="passconfirm"
                  className="form-control input-sm w-100"
                  placeholder="Password Confirm"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                <span className="text-danger">{frm.errors.passconfirm}</span>
              </div>
              <button type="button" onClick={toggleRePassword}>
                {passwordReType === "password" ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>

            <div className="form-group col-md-10 mb-4">
              <div className="input-group d-flex flex-column">
                <h2>Họ tên</h2>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control input-sm w-100"
                  placeholder="Name"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />

                <span className="text-danger">{frm.errors.name} </span>
              </div>
            </div>
            <div className="form-group col-md-10 mb-4">
              <div className="input-group d-flex flex-column">
                <h2>Email</h2>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control input-sm w-100"
                  placeholder="Email"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                {frm.errors.email ? (
                  <span className="text-danger">{frm.errors.email} </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="form-group col-md-10 mb-4">
              <div className="input-group d-flex flex-column">
                <h2>Số điện thoại</h2>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control input-sm w-100"
                  placeholder="Phone"
                  onChange={frm.handleChange}
                  onBlur={frm.handleBlur}
                />
                <span className="text-danger">{frm.errors.phone} </span>
              </div>
            </div>

            <div className="form-group submit">
              <button type="submit">Đăng ký</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
