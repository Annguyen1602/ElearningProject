import React from 'react';
// import imageUser from '../../../' 

export default function HomeAdmin() {
  return (
    <div id='homeAdmin' className='d-flex flex-wrap justify-content-between'>
        <div className='admin-profile paper'>
            <img src="/img/avatar.png" alt="" className='h-50 m-3'/>
            <p className='fs-4 m-3'>Xin chào User.name</p>
        </div>
        <div className="admin-member paper">
            <p>Học viên</p>

        </div>
        <div className="admin-member paper">
            <p>Khóa học</p>

        </div>
        
    </div>
  )
}
