import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../redux/configStore'
import ModalUser from './ModalUser'


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
        <table>
          <thead>
            <tr>
              <th>tai khoan</th>
              <th>ho ten</th>
              <th>email</th>
              <th>so dien thoai</th>
              <th>
                <ModalUser user={1} />
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}
