import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import HomeTeplate from './templates/HomeTeplate/HomeTeplate'

import { Provider } from 'react-redux'
import { store } from './redux/configStore'
import Register from './pages/Register/Register'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import 'antd/dist/antd.css'
import './assets/scss/styles.scss'

import LogIn from './pages/LogIn/LogIn'
import Profile from './pages/Profile/Profile'
import Demo1 from './pages/Register/Demo1'
import Admin from './pages/Admin/AdminPage/Admin'
import LoginAdmin from './pages/Admin/LoginAdmin/LoginAdmin'
import Admintemplate from './templates/AdminTemplate/Admintemplate'
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin'
import UserAdmin from './pages/Admin/UserAdmin/UserAdmin'
import CourseAdmin from './pages/Admin/CourseAdmin/CourseAdmin'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTeplate />}>
          <Route path='demo' element={<Demo1 />}></Route>
          <Route path='profile' element={<Profile />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path='dangky' element={<Register />}></Route>
        <Route path='dangnhap' element={<LogIn />}></Route>
      </Routes>
      <Routes>
        <Route path='admin' element={<Admin />}>
          <Route index element={<LoginAdmin/>}/>
          <Route path='index' element={<Admintemplate Component={HomeAdmin}/>}/>
          <Route path='user' element={<Admintemplate Component={UserAdmin}/>}/>
          <Route path='course' element={<Admintemplate Component={CourseAdmin}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
