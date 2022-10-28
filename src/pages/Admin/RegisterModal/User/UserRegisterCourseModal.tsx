import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import UserTableRegisted from './UserTableRegisted'
import UserTableRegister from './UserTableRegister'

type Props = {
    taiKhoan:string
}

export default function UserRegisterCourseModal ({taiKhoan}: Props) {
    console.log(taiKhoan)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button
        className='green-button px-4 py-2 mx-2 h-100'
        type='primary'
        onClick={showModal}
      >
        <i className='bi bi-plus-circle m-0 p-2'></i>
      </Button>
      <Modal
        title='Ghi danh khóa học'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <section id='register-user-admin' className=''>
          <div className='form-item w-100'>
            <p className='fs-5 py-4'>Đăng ký khoá học</p>
            <div className='form-action w-100'>
              <select name='tenKhoaHoc' id='tenKhoaHoc' className='w-75'>
                <option value='IETC'>bla bla</option>
                <option value='IETC'>bla bla</option>
                <option value='IETC'>bla bla</option>
                <option value='IETC'>bla bla</option>
              </select>
              <button className='blue-button w-25 p-3'>Đăng ký</button>
            </div>
          </div>
          <div className='form-item'>
            <p className='fs-5 py-4'>Khóa học chờ đăng ký</p>
            <UserTableRegister />
          </div>
          <div className='form-item'>
            <p className='fs-5 py-4'>Khóa học đã đăng ký</p>
            <UserTableRegisted />
          </div>
        </section>
      </Modal>
    </>
  )
}
