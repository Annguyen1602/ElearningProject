import { BarsOutlined, StepForwardOutlined } from "@ant-design/icons";
import type { MenuProps, MenuTheme } from "antd";
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

import pic3 from "../../assets/img/image 3.png";

export default function Header() {
  const { arrCourseDirectory } = useSelector(
    (state: RootState) => state.listCoursesReducer
  );
  
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

  return (
    <div className="container d-flex">
      <div>
        <img src={pic3} alt="..." />
      </div>
      <Menu onClick={onClick} style={{ width: 256 }} mode="inline">
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
    </div>
  );
}
