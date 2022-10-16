import React, { useState } from "react";
import { Pagination, Rate } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configStore";
import { ChiTietKhoaHocGhiDanh } from "../../redux/reducers/userReducer";
type Props = {};

export default function Demo1({}: Props) {
  const { chiTietKhoaHocGhiDanh } = useSelector(
    (state: RootState) => state.userReducer.userLogin
  );

  const pageSize = 4;
  
  
  const [state, setState] = useState({
    data: chiTietKhoaHocGhiDanh,
    totalPage: chiTietKhoaHocGhiDanh.length / pageSize,
    current: 1,
    minIndex: 0,
    maxIndex: pageSize,
  });


  const handleChange = (page: number) => {
    setState({
      ...state,
      current: page,
      minIndex: (page - 1) * pageSize,
      maxIndex: page * pageSize,
    });
  };
  const { data, current, minIndex, maxIndex, totalPage } = state
  return (
    <div>
      
      {chiTietKhoaHocGhiDanh?.map((data,index):any=>
        index >= minIndex &&
        index < maxIndex && 
    (
        <div className="m-4" key={index}>
        <div className="coursesRegistered d-flex border-top pt-2 bg-light">
          <div className="imageCourse col-2 me-4">
            <img
              src={data.hinhAnh}
              alt={data.tenKhoaHoc}
              className="w-100"
            />
          </div>
          <div className="detailCourse col-8 d-flex flex-column">
            <h3>{data.tenKhoaHoc}</h3>
            <p>
              {data.moTa.length > 100
                ? data.moTa.substring(0, 200) + "..."
                : data.moTa}
            </p>
          </div>
          <div className="rate col-2 d-flex flex-column align-items-center">
            <div>
              <Rate value={data.danhGia} />
            </div>
            <span>{data.luotXem} học viên</span>
            <button className="btn"> Huỷ</button>
          </div>
        </div>
      </div>
      )
        

      )}
      
      <Pagination
          pageSize={pageSize}
          current={current}
          total={data.length}
          onChange={handleChange}
          style={{ bottom: "0px" }}
        />
      
        
          
      
    </div>
  )
        }
