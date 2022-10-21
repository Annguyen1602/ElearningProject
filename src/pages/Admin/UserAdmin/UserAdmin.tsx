import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/configStore'
import ModalUser from './ModalUser'
import TableUser from './TableUser'


type Props = {}

export default function UserAdmin ({}: Props) {
  const dispatch: AppDispatch = useDispatch()
  return (
    <div id='userAdmin'>
      <div className='wrapper paper d-flex flex-column'>
        <ModalUser />
        <input
          type='text'
          placeholder='Nhập vào tài khoản hoặc họ tên người dùng'
        />
        <TableUser/>
      </div>
    </div>
  )
}
