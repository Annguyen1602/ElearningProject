// import { Menu, MenuProps } from 'antd';
// import React, { useState } from 'react'
// import { BarsOutlined, StepForwardOutlined } from "@ant-design/icons";
// import { RootState } from '../../redux/configStore';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { DanhMuc } from '../../redux/reducers/listCoursesReducer';

// type Props = {}

// export default function DemoHeader({}: Props) {
//     const { arrCourseDirectory } = useSelector(
//         (state: RootState) => state.listCoursesReducer
//       );
//       const [current, setCurrent] = useState("1");
//     const onClick: MenuProps["onClick"] = (e) => {
//         console.log("click ", e);
//         setCurrent(e.key);
//       };
//   return (
//     <div style={{height:'500'}}>
//         <Menu
//           onClick={onClick}
//           style={{ width: 200, height: 45 }}
//           mode="inline"
//         >
//           <Menu.SubMenu
//             key="SubMenu"
            
//             icon={<BarsOutlined />}
//           >
//             <Menu.SubMenu
//             title="Danh mục khoá học ">
//             {arrCourseDirectory.map((courseType: DanhMuc, index: number) => {
//               return (
//                 <Menu.Item key={index}>
//                   <NavLink to="#">{courseType.tenDanhMuc}</NavLink>
//                 </Menu.Item>
//               );
//             })}
//             </Menu.SubMenu>
//             {/* {arrCourseDirectory.map((courseType: DanhMuc, index: number) => {
//               return (
//                 <Menu.Item key={index}>
//                   <NavLink to="#">{courseType.tenDanhMuc}</NavLink>
//                 </Menu.Item>
//               );
//             })} */}
//           </Menu.SubMenu>
//         </Menu>
//     </div>
//   )
// }


import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import Profile from '../../pages/Profile/Profile';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[] | React.ReactNode | JSX.Element | string,
  type?: 'group',
 
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
  getItem(null, null, <MailOutlined />, [
    <span>xin chào</span>,
  ])

  
];

const onClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};

const Demo: React.FC = () => (
  <Menu onClick={onClick} style={{ width: 100 }} mode="vertical" items={items} />
);

export default Demo;