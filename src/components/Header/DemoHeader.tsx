import { Menu, MenuProps } from "antd";
import React, { useState } from "react";
import { BarsOutlined, StepForwardOutlined } from "@ant-design/icons";
import { RootState } from "../../redux/configStore";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DanhMuc } from "../../redux/reducers/listCoursesReducer";

type Props = {};

export default function DemoHeader({}: Props) {
  const { arrCourseDirectory } = useSelector(
    (state: RootState) => state.listCoursesReducer
  );
  const [current, setCurrent] = useState("1");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div style={{ height: "500" }}>
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
    </div>
  );
}
