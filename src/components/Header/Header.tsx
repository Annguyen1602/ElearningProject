import { BarsOutlined, StepForwardOutlined } from "@ant-design/icons";
import { MenuProps, MenuTheme, Space, Input } from "antd";
import { Menu, Switch } from "antd";
import path from "path";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  DanhMuc,
  DanhMucKhoaHoc,
  getCourseDirectoryApi,
  getListCoursesApi,
} from "../../redux/reducers/listCoursesReducer";

import pic3 from "../../assets/img/img4.png";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/setting";
import { getProfileAction } from "../../redux/reducers/userReducer";

export default function Header() {
  const { arrCourseDirectory } = useSelector(
    (state: RootState) => state.listCoursesReducer
  );
  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  const [current, setCurrent] = useState("1");
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const actionApi = getCourseDirectoryApi();
    dispatch(actionApi);
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  console.log(arrCourseDirectory);

  const [inputText, setInputText] = useState("");
  const { Search } = Input;
  const onSearch = (value: string) => {
    let lowerCase = value.toLowerCase();
    setInputText(lowerCase);
    console.log(value);
  };
  return (
    <div className="header border mb-2">
      <div className="container d-flex flex-wrap">
        <div className="image">
          <img src={pic3} alt="..." height={40} />
        </div>
        <Menu
          onClick={onClick}
          style={{ width: 256, height: 45 }}
          mode="inline"
        >
          <Menu.SubMenu
            key="SubMenu"
            title="Danh mục khoá học "
            icon={<BarsOutlined />}
          >
            {arrCourseDirectory.map((courseType: DanhMuc, index: number) => {
              return (
                <Menu.Item key={index}>
                  <NavLink to="#">{courseType.tenDanhMuc}</NavLink>
                </Menu.Item>
              );
            })}
          </Menu.SubMenu>
        </Menu>
        <Menu onClick={onClick} style={{ width: 80 }} mode="vertical">
          <Menu.SubMenu icon={<BarsOutlined />}>
            <Menu.SubMenu title="Danh sách khóa học">
              {arrCourseDirectory.map((courseType: DanhMuc, index: number) => {
                return (
                  <Menu.Item key={index}>
                    <NavLink to="#">{courseType.tenDanhMuc}</NavLink>
                  </Menu.Item>
                );
              })}
            </Menu.SubMenu>
            <NavLink to="/dangky">
              <Menu.SubMenu title="Đăng ký"></Menu.SubMenu>
            </NavLink>
            <NavLink to="/dangnhap">
              <Menu.SubMenu title="Đăng nhập"></Menu.SubMenu>
            </NavLink>
          </Menu.SubMenu>
        </Menu>
        <div className="search ms-2">
          <Space direction="vertical">
            <Search
              placeholder="Nhập khoá học cần tìm"
              onSearch={onSearch}
              style={{ width: 400 }}
              // onChange={debouceInputHandler}
            />
          </Space>
        </div>
        {userLogin.hoTen ? (
          <div className="nav-item logout d-flex">
            <span className="btn btn-warning d-sm-none d-lg-block me-2">
              Tài khoản
              <br />
              {userLogin.hoTen}
            </span>
            <a
            style={{fontSize:"16px",lineHeight:"65px"}}
              className=" nav-link btn btn-warning d-sm-none d-lg-block"
              href="/"
              onClick={() => {
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(USER_LOGIN);
              }}
            >
              Đăng xuất
            </a>
          </div>
        ) : (
          <div className="registerHeader">
            <NavLink to="/dangky" className="custom-btn btn-5 mb-lg-2 me-4">
              {" "}
              Đăng ký
            </NavLink>
            <NavLink to="/dangnhap" className="custom-btn btn-5">
              {" "}
              Đăng nhập
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
