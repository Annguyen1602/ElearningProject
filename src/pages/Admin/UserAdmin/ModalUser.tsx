import { Button, message, Modal } from 'antd'
import React, { useState } from 'react'

type Props = {
  user?: number
}

export default function ModalUser ({ user }: Props) {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      message.success({ content: 'Đăng nhập thành công' })
      setLoading(false)
      setOpen(false)
    }, 3000)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        className='green-button'
        type='primary'
        onClick={showModal}
        style={{ height: 80 }}
      >
        {user ? 'Sửa người dùng' : 'Thêm người dùng'}
      </Button>
      <Modal
        open={open}
        title={user ? 'Sửa người dùng' : 'Thêm người dùng'}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          user
            ? [
                <Button danger key='back' onClick={handleCancel}>
                  Trở lại
                </Button>,
                <Button
                  key='submit'
                  type='primary'
                  loading={loading}
                  onClick={handleOk}
                >
                  Cập nhật
                </Button>
              ]
            : [
                <Button danger key='back' onClick={handleCancel}>
                  Trở lại
                </Button>,
                <Button
                  key='submit'
                  type='primary'
                  loading={loading}
                  onClick={handleOk}
                >
                  Thêm
                </Button>
              ]
        }
      >
        <div className='paper row'>
          <div className='form-item col-6'>
            <p>Tài khoản</p>
            <input type='text' />
          </div>
          <div className='form-item col-6'>
            <p>Email</p>
            <input type='text' />
          </div>
          <div className='form-item col-6'>
            <p>Mật khẩu</p>
            <input type='text' />
          </div>
          <div className='form-item col-6'>
            <p>Số điện thoại</p>
            <input type='text' />
          </div>
          <div className='form-item col-6'>
            <p>Họ Tên</p>
            <input type='text' />
          </div>
          <div className='form-item col-6'>
            <p>Loại người dùng</p>
            <select name='typeUser' id='type-user'>
              <option value='Giáo vụ'>Giáo vụ</option>
              <option value='Học viên'>Học viên</option>
            </select>
          </div>
        </div>
      </Modal>
    </>
  )
}
