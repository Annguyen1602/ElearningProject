import React from 'react'

export default function CourseAdmin() {
  return (
    <div id='courseAdmin'>
        <div className="wrapper paper d-flex flex-column">
            <button className='green-button w-25'>Thêm khóa học</button>
            <input type="text" placeholder='Nhập vào tên khóa học'/>
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
