import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../../assets/img/brand.png'

type props = {
  Component: React.FC
}

export default function Admintemplate ({ Component }: props) {
  const [isActive, setActive] = useState('home')
  return (
    <div className='adminTemplate d-flex' id='adminTemplate'>
      <div className='admin-navbar d-flex flex-column align-items-center'>
        <div className='admin-navbar-brand text-center mt-5'>
          <img src={image} alt='' className='w-75' />
        </div>
        <div className='admin-navbar-items  h-100 w-100'>
          <ul>
            <li className='animate__animated animate__fadeInDown'>
              <NavLink
                to={'/admin/index'}
                className={` ${isActive === 'home' ? 'fs-4 isactive' : 'fs-4'}`}
                onClick={() => {
                  setActive('home')
                }}
              >
                <i className='bi bi-house'></i>Trang Chủ
              </NavLink>
            </li>

            <li className='animate__animated animate__fadeInDown animate__delay-1s'>
              <NavLink to={'/admin/user'} className={` ${isActive === 'user' ? 'fs-4 isactive' : 'fs-4'}`}
                onClick={() => {
                  setActive('user')
                }}>
                <i className='bi bi-person'></i>Người dùng
              </NavLink>
            </li>

            <li className='animate__animated animate__fadeInDown animate__delay-2s'>
              <NavLink to={'/admin/course'} className={` ${isActive === 'course' ? 'fs-4 isactive' : 'fs-4'}`}
                onClick={() => {
                  setActive('course')
                }}>
                <i className='bi bi-book'></i>Khóa học
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='admin-content'>
        <Component />
      </div>
    </div>
  )
}
