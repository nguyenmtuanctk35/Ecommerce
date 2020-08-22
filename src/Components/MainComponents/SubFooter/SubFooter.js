import React from "react";
import "./SubFooter.css";

const subFooter = () => {
  return (
    <div className=" Footer__NewsLetter-e3clg6-1 jMsQbz">
      <div
        className="container Container-itwfbd-0 jFkAwY"
        style={{ display: "flex", height: "100px", paddingTop: "32px" }}
      >
        <div className="NewsLetter-icon">
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png"
            width={163}
            alt=""
          />
        </div>
        <div className="NewsLetter-description">
          <h3>Đăng ký nhận bản tin Winkel</h3>
          <h5>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</h5>
        </div>
        <div className="NewsLetter-form">
          <div>
            <input
              type="email"
              placeholder="Địa chỉ email của bạn"
            />
          </div>
          <button>Đăng ký</button>
        </div>
      </div>
    </div>
  );
};
export default subFooter
