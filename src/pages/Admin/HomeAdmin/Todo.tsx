import React from 'react'

type Props = {}

type dataTodo = {
  tenCongViec: string

}

export default function Todo ({}: Props) {
  const dataTodo: dataTodo[] = [{tenCongViec: "them sinh vien"},{tenCongViec: "them khoa hoc"},{tenCongViec: "them sinh vien"}]
  return (
    <div className='todo'>
      <p className='fs-3'>Việc làm hôm nay</p>
      <input type="text" placeholder='Thêm công việc' onKeyDown={(e) => {
        if(e.key === "Enter") {

          console.log(1111)
        }
      }}/>
      <table className='table'>
        <thead>
          <tr>
            <td>Việc làm</td>
            <td>Trạng thái</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thêm học viên</td>
            <td>
              <input type='checkbox' placeholder='x'/>
              <button className='px-3 text-danger mx-2'>X</button>
            </td>
          </tr>

          <tr>
            <td>Thêm học viên</td>
            <td>
              <input type='checkbox' placeholder='x'/>
              <button className='px-3 text-danger mx-2'>X</button>
            </td>
          </tr>

          <tr>
            <td>Thêm học viên</td>
            <td>
              <input type='checkbox' placeholder='x'/>
              <button className='px-3 text-danger mx-2'>X</button>
            </td>
          </tr>

          <tr>
            <td>Thêm học viên</td>
            <td>
              <input type='checkbox' placeholder='x'/>
              <button className='px-3 text-danger mx-2'>X</button>
            </td>
          </tr>

          <tr>
            <td>Thêm khóa học</td>
            <td>
              <input type='checkbox' name='' id='' />
            </td>
          </tr>

          <tr>
            <td>Ghi danh khóa học</td>
            <td>
              <input type='checkbox' name='' id='' />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
