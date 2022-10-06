import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface listCourses {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: NguoiTao;
  danhMucKhoaHoc: DanhMucKhoaHoc;
}

export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}

export interface NguoiTao {
  taiKhoan: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}

const initialState: any = {
  arrayListCourses: [],
};

const listCourses = createSlice({
  name: "listCoursesReducer",
  initialState,
  reducers: {
    getAllCoursesAction: (state, action: PayloadAction<listCourses[]>) => {
      state.arrayListCourses = action.payload;
    },
  },
});

export const { getAllCoursesAction } = listCourses.actions;

export default listCourses.reducer;

//-------------------------action API------------------------

export const getListCoursesApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
      console.log(result.data);
      let arrCourses: listCourses[] = result.data;
      const action = getAllCoursesAction(arrCourses);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
