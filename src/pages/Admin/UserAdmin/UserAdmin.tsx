import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/configStore'
import { searchUserApi } from '../../../redux/reducers/userReducer'
import ModalUser from './ModalUser'
import TableUser from './TableUser'

type Props = {}

export default function UserAdmin ({}: Props) {
  const dispatch: AppDispatch = useDispatch()
  const { arrUserSearch } = useSelector((state: RootState) => state.userReducer)
  return (
    <div id='userAdmin'>
      <div className='d-flex flex-column'>
        <ModalUser />
        <div className='paper my-4'>
          <p className='fs-3'>Tìm kiếm tài khoản</p>
          <input
            className='mb-4 w-100'
            type='text'
            placeholder='Nhập vào tên tài khoản'
            onChange={e => {
              let key = e.target.value
              dispatch(searchUserApi(key))
            }}
          />
        </div>
        <TableUser />
      </div>
    </div>
  )
}
