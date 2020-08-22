import React from "react";
import "./Address.css";

const Address = (props) => {
  return (
    <div className="ShippingAddress__StyledShippingAddress-sc-12icqkv-0 fxjiAa">
      <div className="title">
        <span>Địa chỉ giao hàng</span>
        <a href="/checkout/shipping">Sửa</a>
      </div>
      <div className="address">
        <span className="name">lê ngọc tuấn</span>
        <span className="street">
          325 Lý Tự Trọng,Phường Bến Thành, Phường 03, Quận 5, Hồ Chí Minh Việt
          Nam
        </span>
        <span className="phone">Điện thoại: 0392363634</span>
      </div>
    </div>
  );
};
export default Address