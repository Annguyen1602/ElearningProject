import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import CourseRegister from './CourseRegister'
import CourseRegisterd from './CourseRegisterd'
type Props = {}

export default function CourseRegisterUserModal ({}: Props) {
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
        className='green-button p-2 h-100'
        type='primary'
        onClick={() => {
          showModal()
        }}
      >
        <i className='bi bi-plus-circle m-0 p-2'></i>
      </Button>
      <Modal
        title='Ghi danh học viên'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <section id='register-user-admin'>
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
            <p className='fs-5 py-4'>Học viên chờ đăng ký</p>
            <CourseRegister />
          </div>
          <div className='form-item'>
            <p className='fs-5 py-4'>Học viên đã đăng ký</p>
            <CourseRegisterd />
          </div>
        </section>
      </Modal>
    </>
  )
}
