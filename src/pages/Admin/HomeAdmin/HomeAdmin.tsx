import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/configStore'
import { getListCoursesApi } from '../../../redux/reducers/listCoursesReducer'
import { getListUserApi } from '../../../redux/reducers/userReducer'
import ChartUser from './ChartUser'
// import imageUser from '../../../'

export default function HomeAdmin () {
  const { userLogin, arrUser } = useSelector((state: RootState) => state.userReducer)
  const { arrayListCourses } = useSelector((state: RootState) => state.listCoursesReducer)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(getListUserApi())
    dispatch(getListCoursesApi())
  },[])
  return (
    <div id='homeAdmin' className='d-flex flex-wrap justify-content-between'>
      <div className='admin-profile admin-item paper'>
        <img src='/img/avatar.png' alt='' className='w-50 m-3' />
        <p className='fs-4 m-3'>Xin chào {userLogin.hoTen}</p>
        <div className='admin-profile-button'>
          <button className='blue-button mx-2'>Sửa thông tin</button>
          <button className='red-button'>Đăng xuất</button>
        </div>
      </div>
      <div className='admin-member admin-item'>
        <p>Thành viên</p>
        <ChartUser/>
      </div>
      <div className='admin-member admin-item paper'>
        <p>Khóa học</p>
      </div>
      <div className='admin-member admin-item paper'>
        <p>todo</p>
      </div>
      <div className='admin-member admin-item paper'>
        <p>calendar</p>
      </div>
      <div className='admin-member admin-item paper'>
        <p>notification</p>
      </div>
    </div>
  )
}
