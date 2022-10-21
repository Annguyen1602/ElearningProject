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
      <div className="container d-flex ">
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
          <span className="btn btn-warning">
            Tài khoản
            <br />
            {userLogin.hoTen}
          </span>
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
