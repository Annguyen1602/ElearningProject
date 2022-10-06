import { BarsOutlined, StepForwardOutlined } from "@ant-design/icons";
import type { MenuProps, MenuTheme } from "antd";
import { Menu, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";
import { getListCoursesApi } from "../../redux/reducers/listCourses";

export default function Header() {
  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Danh sách khoá học", "sub", <BarsOutlined />, [
      getItem("Submenu", "sub1", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),

      getItem("Submenu", "sub2", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),

      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),
  ];
  const [current, setCurrent] = useState("1");
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const actionApi = getListCoursesApi();
    dispatch(actionApi);
  }, []);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="container">
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={[]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
  );
}
