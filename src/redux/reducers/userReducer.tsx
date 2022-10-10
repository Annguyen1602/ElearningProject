import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface Student {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maNhom: string;
  email: string;
  passConfirm: string;
}

const initialState = {};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {},
});

export const {} = userReducer.actions;

export default userReducer.reducer;

//----------------API signIn-------------------

export const postSignInApi = (student: Student) => {
  return async () => {
    try {
        const result = await http.post("/QuanLyNguoiDung/DangKy", student);
          const key = 'updatable';
        const openMessage = () => {
            message.loading({ content: 'Vui lòng chờ', key });
            setTimeout(() => {
              message.success({ content: 'Đăng ký thành công!', key, duration: 2 });
            }, 1000);
          };
          openMessage()
        console.log('xin chào');
        
      } catch (error) {
        console.log(error);
  
        alert("Email đã tồn tại");
      }
  };
};
