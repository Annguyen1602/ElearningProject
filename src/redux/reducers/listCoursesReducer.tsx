import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { message } from 'antd'
import axios from 'axios'
import { http } from '../../util/setting'
import { AppDispatch } from '../configStore'
import { userAdmin } from './userReducer'

export interface listCourses {
  maKhoaHoc: string
  biDanh: string
  tenKhoaHoc: string
  moTa: string
  luotXem: number
  hinhAnh: string
  maNhom: string
  ngayTao: string
  soLuongHocVien: number
  nguoiTao: NguoiTao
  danhMucKhoaHoc: DanhMucKhoaHoc
}

export interface DanhMucKhoaHoc {
  maDanhMucKhoahoc: string
  tenDanhMucKhoaHoc: string
}

export interface DanhMuc {
  maDanhMuc: string
  tenDanhMuc: string
}

export interface NguoiTao {
  taiKhoan: string
  hoTen: string
  maLoaiNguoiDung: string
  tenLoaiNguoiDung: string
}

export interface CourseAdmin {
  maKhoaHoc: string
  biDanh: string
  tenKhoaHoc: string
  moTa: string
  luotXem: number
  danhGia: number
  hinhAnh: string
  maNhom: string
  ngayTao: string
  maDanhMucKhoaHoc: string
  taiKhoanNguoiTao: string
}

export interface fileData {
  tenKhoaHoc: string
  file: any
}

const initialState: any = {
  arrayListCourses: [],
  arrCourseDirectory: []
}

const listCourses = createSlice({
  name: 'listCoursesReducer',
  initialState,
  reducers: {
    getAllCoursesAction: (state, action: PayloadAction<listCourses[]>) => {
      state.arrayListCourses = action.payload
    },
    getAllCoursesDirectory: (
      state,
      action: PayloadAction<DanhMucKhoaHoc[]>
    ) => {
      state.arrCourseDirectory = action.payload
    }
  }
})

export const {
  getAllCoursesAction,
  getAllCoursesDirectory
} = listCourses.actions

export default listCourses.reducer

//-------------------------action API------------------------

export const getListCoursesApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc')
      let arrCourses: listCourses[] = result.data
      const action = getAllCoursesAction(arrCourses)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}
export const getCourseDirectoryApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
      console.log(result)
      let arrCoursesDirectory: DanhMucKhoaHoc[] = result.data
      const action = getAllCoursesDirectory(arrCoursesDirectory)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
  }
}

//------------Add course api------------------
export const addCourseAdminApi = (course: CourseAdmin, file: any) => {
  // return (dispatch: AppDispatch) => {
  //     const frm = new FormData()
  //     frm.append("formFile", file)
  //     frm.append("tenKhoaHoc", course.tenKhoaHoc)
  //     // let result = await http.post("QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", formData)
  //     let result = http.post("/QuanLyKhoaHoc/ThemKhoaHoc", course).then((res) => {
  //       http.post("QuanLyKhoaHoc/UploadHinhAnhKhoaHoc", frm)
  //     })
  //     // dispatch(addCourseUploadImg(formData))

  //     // dispatch(addCourseUploadImg(formData))
  //     // console.log(result)
  //     message.success('Thêm thành công')
  //     dispatch(getListCoursesApi())
  // }
  http.post('/QuanLyKhoaHoc/ThemKhoaHoc', course).then(res => {
    const frm = new FormData()
    frm.append('file', file.file)
    frm.append('tenKhoaHoc', course.tenKhoaHoc)
    http.post(`QuanLyKhoaHoc?tenKhoaHoc=${course.tenKhoaHoc}&maNhom=GP01`, frm)
  })
}

//---------------update course api-------------
export const updateCourseAdminApi = (course: CourseAdmin) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = http.put('QuanLyKhoaHoc/CapNhatKhoaHoc', course)
    } catch (err) {
      console.log(err)
    }
  }
}

//----------------delete course-----------------
export const deleteCouseAdminApi = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.delete('QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=' + id)
      message.success(result.data)
      dispatch(getListCoursesApi())
    } catch (err:any) {
      message.error(err.response.data)
    }
  }
}

//---------------search course admin---------------
export const searchCourseAdminApi = (key: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (key) {
        let result = await http.get(
          'QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=' + key
        )
        console.log(result)
        dispatch(getAllCoursesAction(result.data))
      }
    } catch (err) {
      console.log(err)
    }
  }
}

// --------------upload image----------------
export const addCourseUploadImg = (file: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post(
        'QuanLyKhoaHoc/ThemKhoaHocUploadHinh',
        file,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
    } catch (err) {
      console.log(err)
    }
  }
}
