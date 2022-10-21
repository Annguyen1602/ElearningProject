import Table, { ColumnsType } from 'antd/lib/table'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/configStore'
import {
  addUserApi,
  ChiTietKhoaHocGhiDanh,
  deleteUserApi,
  getListUserApi,
  Profile,
  updateUserApi
} from '../../../redux/reducers/userReducer'
import ModalUser from './ModalUser'

type Props = {}

interface DataType {
  chiTietKhoaHocGhiDanh: ChiTietKhoaHocGhiDanh[]
  taiKhoan: string
  matKhau: string
  hoTen: string
  soDT: string
  maLoaiNguoiDung: string
  maNhom: string
  email: string
}

export default function TableUser ({}: Props) {
  const dispatch: AppDispatch = useDispatch()
  const { arrUser } = useSelector((state: RootState) => state.userReducer)

  const columns: ColumnsType<DataType> = [
    { title: 'Tên tài khoản', dataIndex: 'taiKhoan', key: 'taiKhoan' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Loại người dùng',
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung'
    },
    {
      title: 'Họ và tên',
      dataIndex: 'hoTen',
      key: 'hoTen'
    },
    {
      title: 'Thao tác',
      dataIndex: '',
      width:420,
      key: 'x',
      render: e => (
        <>
          <ModalUser user={e} />
          <button className='red-button px-4 py-2 mx-2' onClick={() => {
            dispatch(deleteUserApi(e.taiKhoan))
          }}>Xóa người dùng</button>
        </>
      )
    }
  ]

  const data: DataType[] = arrUser

  useEffect(() => {
    dispatch(getListUserApi())
  },[])

  return <Table columns={columns} dataSource={data} />
}