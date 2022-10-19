import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import LogIn from '../../pages/LogIn/LogIn'

import {
  ACCESS_TOKEN,
  getStoreJson,
  http,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN
} from '../../util/setting'
import { AppDispatch } from '../configStore'

export interface Student {
  taiKhoan: string
  matKhau: string
  hoTen: string
  soDT: string
  maNhom: string
  email: string
  passConfirm: string
}
export interface userLogin {
  taiKhoan: string
  matKhau: string
}

export interface Profile {
  chiTietKhoaHocGhiDanh: ChiTietKhoaHocGhiDanh[]
  taiKhoan: string
  matKhau: string
  hoTen: string
  soDT: string
  maLoaiNguoiDung: string
  maNhom: string
  email: string
}
export interface updateProfile {
  taiKhoan: string
  matKhau: string
  hoTen: string
  soDT: string
  email: string
  maLoaiNguoiDung: string
  maNhom: string
}

export interface userType {
  maLoaiNguoiDung: string
  tenLoaiNguoiDung: string
}

export interface ChiTietKhoaHocGhiDanh {
  maKhoaHoc: string
  tenKhoaHoc: string
  biDanh: string
  moTa: string
  luotXem: number
  hinhAnh: string
  ngayTao: Date
  danhGia: number
}
export interface stateRedux {
  userLogin: Profile
  userToken: any
  arrUser: Profile[]
  userType: userType[]
}
const initialState: stateRedux = {
  userLogin: getStoreJson(USER_LOGIN) || {},
  userToken: '',
  arrUser: [],
  userType: []
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getProfileAction: (state, action: PayloadAction<Profile>) => {
      state.userLogin = action.payload
    },
    userCheck: (state, action: PayloadAction<Profile>) => {
      state.userToken = action.payload
    },
    arrUserAction: (state, action: PayloadAction<Profile[]>) => {
      state.arrUser = action.payload
    },
    userTypeAction: (state, action: PayloadAction<userType[]>) => {
      state.userType = action.payload
    }
  }
})

export const {
  getProfileAction,
  userCheck,
  arrUserAction,
  userTypeAction
} = userReducer.actions

export default userReducer.reducer

//----------------API signUp-------------------

export const postSignUpApi = (student: Student) => {
  return async () => {
    try {
      const result = await http.post('/QuanLyNguoiDung/DangKy', student)
      const key = 'updatable'
      const openMessage = () => {
        message.loading({ content: 'Vui lòng chờ', key })
        setTimeout(() => {
          message.success({ content: 'Đăng ký thành công!', key, duration: 2 })
        }, 1000)
      }
      openMessage()
    } catch (error:any) {
      alert(error.response.data)
    }
  }
}

// -----------------Login API --------------------

export const LogInApi = (userLogin: userLogin) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post('/QuanLyNguoiDung/DangNhap', userLogin)
      console.log(result)
      setCookie(ACCESS_TOKEN, result.data.accessToken, 30)
      setStore(ACCESS_TOKEN, result.data.accessToken)
      dispatch(userCheck(result.data.accessToken))

      dispatch(getProfileApi())
    } catch (error:any) {
      alert(error.response.data)
    }
  }
}

//------------Profile API-------------------------

export const getProfileApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post('/QuanLyNguoiDung/ThongTinNguoiDung')
      console.log(result)
      const action = getProfileAction(result.data)
      dispatch(action)
      setStoreJson(USER_LOGIN, result.data)
    } catch (error) {
      console.log(error)
    }
  }
}

//----------------UpdateAPI-----------------------

export const updateProfileApi = (userUpdate: updateProfile) => {
  return async () => {
    try {
      const result = await http.put(
        '/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
        userUpdate
      )
      const key = 'updatable'
      const openMessage = () => {
        message.loading({ content: 'Vui lòng chờ', key })
        setTimeout(() => {
          message.success({ content: 'Cập nhật thành công!', key, duration: 2 })
        }, 1000)
      }
      openMessage()
    } catch (error:any) {
      alert(error.response.data)
    }
  }
}
//---------------------Get list user--------------------
export const getListUserApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/QuanLyNguoiDung/LayDanhSachNguoiDung')
      dispatch(arrUserAction(result.data))
    } catch (error) {
      console.log(error)
    }
  }
}
//-------------------Get user type--------------------
export const getUserTypeApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get('/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung')
      dispatch(userTypeAction(result.data))
    } catch (err) {
      console.log(err)
    }
  }
}
