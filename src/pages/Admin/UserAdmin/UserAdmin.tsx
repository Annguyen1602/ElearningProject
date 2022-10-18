import React from 'react'

export default function UserAdmin() {
  return (
    <div id='courseAdmin'>
        <div className="wrapper paper d-flex flex-column">
            <button className='green-button w-25'>Thêm người dùng</button>
            <input type="text" placeholder='Nhập vào tài khoản hoặc họ tên người dùng'/>
            <table>
                <thead>
                    <tr>
                        <th>tai khoan</th>
                        <th>ho ten</th>
                        <th>email</th>
                        <th>so dien thoai</th>
                        <th>thao tac</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
  )
}
