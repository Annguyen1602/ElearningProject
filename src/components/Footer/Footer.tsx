import React from "react";
import cyber from "../../assets/img/cyberlearn.png";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="footer bg-dark p-3">
      <div className="row">
        <div className="leftComponent col-4">
          <div className="logo">
            <img src={cyber} alt="..." height={40} />
            <p className="text-white">
              CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự
              án thực tế
            </p>
          </div>
          <div className="infoRegister">
            <h2 className="text">NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h2>
            <p className="text-white">
              CyberSoft sẽ gửi các khoá học trực tuyến & các chương trình
              CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp
              dẫn cho các bạn
            </p>
            <div className="form d-flex">
            <div className="form-floating mb-3 col-8">
              <input
                type="email"
                className="form-control"
                id="floatingPassword"
                placeholder="Email liên hệ"
              />
              <label htmlFor="floatingPassword">Email</label>
            </div>
              <button className="btn btn-warning">ĐĂNG KÝ</button>
            </div>
          </div>
          <div className="location">
            <div className="locat1">
              <i className="bi bi-geo-alt-fill text-white"></i>
              <span className="text-white">
                Cơ sở 1: 376 Võ Văn Tần - Quận 3
              </span>
            </div>
            <div className="locat1">
              <i className="bi bi-geo-alt-fill text-white"></i>
              <span className="text-white">
                Cơ sở 2: 459 Sư Vạn Hạnh - Quận 10
              </span>
            </div>
            <div className="locat1">
              <i className="bi bi-geo-alt-fill text-white"></i>
              <span className="text-white">
                Cơ sở 3: 376 Võ Văn Tần - Bình Thạnh
              </span>
            </div>
            <div className="locat1">
              <i className="bi bi-geo-alt-fill text-white"></i>
              <span className="text-white">
                Cơ sở 4: Đà Nẵng - Quận Hải Châu
              </span>
            </div>
            <div className="phone">
              <i className="bi bi-telephone-fill text-white"></i>
              <span className="text-white">096.105.1014 - 098.407.5835</span>
            </div>
          </div>
        </div>
        <div className="centerComponent col-4">
          <h4 className="text-white">ĐĂNG KÝ TƯ VẤN</h4>
          <div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Họ và tên"
              />
              <label htmlFor="floatingInput">Họ và tên</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingPassword"
                placeholder="Email liên hệ"
              />
              <label htmlFor="floatingPassword">Email liên hệ</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                placeholder="phone"
              />
              <label htmlFor="floatingPassword">Điện thoại liên hệ</label>
            </div>
            <button className="btn btn-warning">ĐĂNG KÝ TƯ VẤN</button>
          </div>
          <div className="linkCourse">
            <a href="#">Lập trình Front End</a>
            <a href="#"> Lập trình React JS</a>
            <a href="#"> Lập trình tư duy</a>
            <a href="#"> Lập trình Frontend</a>
            <a href="#">Lập trình NodeJS</a>
            <a href="#">Lập trình Backend</a>
            <a href="#">Lập trình Java Web</a>
            <a href="#">Lập trình Java Spring - Java Boot</a>
            <a href="#">Phân tích Dữ liệu với Python</a>
            <a href="#">Tôi Đi Code Dạo</a>
            
          </div>
          
        </div>
        <div className="rightComponent col-4">
       <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={400} height={331} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0}  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />


        </div>
      </div>
    </div>
  );
}
