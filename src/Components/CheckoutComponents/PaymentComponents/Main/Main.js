import React, { useState } from "react";
import {Link} from 'react-router-dom'
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import "./Main.css";

function formatNumber(num) {
  const nf = Intl.NumberFormat();
  return nf.format(num);
}
const Main = (props) => {
  const [shippingMethod, setShippingMethod] = useState("Giao Trong Ngày");
  const [paymentMethod, setPaymentMethod] = useState(
    "Thanh toán tiền mặt khi nhận hàng"
  );
  const [priceShipping, setPriceShipping] = useState(15000);
  const handleChangeShipping = (event) => {
    setShippingMethod(event.target.value);
    setPriceShipping(event.target.value === "Giao Trong Ngày" ? 35000 : 15000);
  };
  const handleChangePayment = (event) => {
    setPaymentMethod(event.target.value);
  };
  let myCart = localStorage.getItem("myCart");
  let userId = localStorage.getItem("userId");
  let address = JSON.parse(localStorage.getItem("address"));

console.log(address)
  let totalPrice = 0;
  JSON.parse(myCart).map(
    (el) => (totalPrice += parseInt(el.counter, 10) * parseInt(el.price, 10))
  );

  return (
    <React.Fragment>
      <div className="container Container-itwfbd-0 jFkAwY">
        <div className="row">
          <div className=" styles__Left-hcztvk-1 ggAFge">
            <div className="styles__Section-hcztvk-0 fwsEni">
              <h3 className="title">1. Chọn hình thức giao hàng</h3>
              <FormControl
                component="fieldset"
                className="ShippingMethods__StyledShippingMethods-sc-10myobp-0 iWIiNj"
              >
                <RadioGroup
                  aria-label="shipping"
                  name="shipping"
                  value={shippingMethod}
                  onChange={handleChangeShipping}
                >
                  <FormControlLabel
                    className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ"
                    value="Giao Trong Ngày"
                    control={<Radio />}
                    label="Giao Trong Ngày"
                  />
                  <FormControlLabel
                    className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ"
                    value="Giao Tiêu Chuẩn"
                    control={<Radio />}
                    label="Giao Tiêu Chuẩn"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="styles__Section-hcztvk-0 fwsEni">
              <h3 className="title">2. Chọn hình thức thanh toán</h3>
              <FormControl
                component="fieldset"
                className="ShippingMethods__StyledShippingMethods-sc-10myobp-0 iWIiNj"
              >
                <RadioGroup
                  aria-label="payment"
                  name="payment"
                  value={paymentMethod}
                  onChange={handleChangePayment}
                >
                  <FormControlLabel
                    className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ"
                    value="Thanh toán tiền mặt khi nhận hàng"
                    control={<Radio />}
                    label="Thanh toán tiền mặt khi nhận hàng"
                  />
                  <FormControlLabel
                    className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ"
                    value="Thanh toán bằng thẻ quốc tế Visa,Master,JCB"
                    control={<Radio />}
                    label="Thanh toán bằng thẻ quốc tế Visa,Master,JCB"
                  />
                  <FormControlLabel
                    className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ"
                    value="Thẻ ATM nội địa/Internet Banking(Miễn phí thanh toán)"
                    control={<Radio />}
                    label="Thẻ ATM nội địa/Internet Banking(Miễn phí thanh toán)"
                  />
                  <FormControlLabel
                    className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ"
                    value="Thanh toán bằng ví MoMo"
                    control={<Radio />}
                    label="Thanh toán bằng ví MoMo"
                  />
                  <FormControlLabel
                    className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ"
                    value="Thanh toán qua ZaloPay"
                    control={<Radio />}
                    label="Thanh toán qua ZaloPay"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="order-button">
              <Link to="/completeOrder">ĐẶT MUA</Link>
            </div>
          </div>
          <div className=" styles__Right-hcztvk-2 jFEIKb">
            <div className="ShippingAddress__StyledShippingAddress-sc-12icqkv-0 fxjiAa">
              <div className="title">
                <span>Địa chỉ giao hàng</span>
                <a href="/shipping">Sửa</a>
              </div>
              <div className="address">
                <span className="name">{address.name}</span>
                <span
                  className="street"
                  style={{ display: "block", fontSize: "1rem" }}
                >
                  {address.fullAddress}
                </span>
                <span className="phone">Điện thoại: {address.phoneNumber}</span>
              </div>
            </div>
            <div className="OrderSummary__StyledOrderSummary-ue7sy3-0 UHbjr">
              <div className="title">
                <span>Đơn hàng (1 sản phẩm)</span>
                <a href="/cart">Sửa</a>
              </div>
              <div className="cart">
                {JSON.parse(myCart).map((el) => (
                  <div className="product" key={el.id}>
                    <div className="OrderSummary__StyledItem-ue7sy3-1 iylcMU">
                      <div className="info">
                        <strong className="qty">{el.counter} x</strong>
                        <h5 className="product-name">{el.name}</h5>
                        <span className="seller-name">
                          Cung cấp bởi <strong>{el.currentSeller}</strong>
                        </span>
                      </div>
                      <div className="price">
                        {formatNumber(
                          parseInt(el.price, 10) * parseInt(el.counter, 10)
                        )}{" "}
                        ₫
                      </div>
                    </div>
                  </div>
                ))}

                <div className="price-summary">
                  <div className="OrderSummary__StyledPriceInfo-ue7sy3-2 ifcYED">
                    <div className="inner">
                      <div className="name">Tạm tính</div>
                      <div className="value">{formatNumber(totalPrice)}đ</div>
                    </div>
                  </div>
                  <div className="OrderSummary__StyledPriceInfo-ue7sy3-2 ifcYED">
                    <div className="inner">
                      <div className="name">Phí vận chuyển</div>
                      <div className="value">
                        {formatNumber(parseInt(priceShipping, 10))}đ
                      </div>
                    </div>
                  </div>
                  <div className="total">
                    <div className="name" style={{ width: "35%" }}>
                      Thành tiền:
                    </div>
                    <div className="value" style={{ width: "65%" }}>
                      {formatNumber(
                        parseInt(totalPrice, 10) + parseInt(priceShipping, 10)
                      )}{" "}
                      ₫
                      <i
                        style={{
                          display: "block",
                          fontSize: "0.8rem",
                          color: "black",
                        }}
                      >
                        (Đã bao gồm VAT nếu có)
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Main;
