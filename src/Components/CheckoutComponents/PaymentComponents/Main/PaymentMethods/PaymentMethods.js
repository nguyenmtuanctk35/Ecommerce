import React,{useState} from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import "./PaymentMethods.css";

const paymentMethods = (props) => {
    const [paymentMethod, setPaymentMethod] = useState('Thanh toán tiền mặt khi nhận hàng');

    const handleChangePayment = (event) => {
      setValue(event.target.value);
    };
  return (
    <div className="styles__Left-hcztvk-1 ggAFge">
    <div className="container styles__Section-hcztvk-0 fwsEni">
      <h3 className="title">2. Chọn hình thức thanh toán</h3>
      <div className="ShippingMethods__StyledShippingMethods-sc-10myobp-0 iWIiNj">
      <FormControl component="fieldset">
      <RadioGroup aria-label="payment" name="payment" value={value} onChange={handleChange}>
      <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Thanh toán tiền mặt khi nhận hàng" control={<Radio />} label="Thanh toán tiền mặt khi nhận hàng" />
        </div>
      <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Thanh toán bằng thẻ quốc tế Visa,Master,JCB" control={<Radio />} label="Thanh toán bằng thẻ quốc tế Visa,Master,JCB" />
        </div>
        <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Thẻ ATM nội địa/Internet Banking(Miễn phí thanh toán)" control={<Radio />} label="Thẻ ATM nội địa/Internet Banking(Miễn phí thanh toán)" />
        </div>
        <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Thanh toán bằng ví MoMo" control={<Radio />} label="Thanh toán bằng ví MoMo" />
        </div>
        <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Thanh toán qua ZaloPay" control={<Radio />} label="Thanh toán qua ZaloPay" />
        </div>
      </RadioGroup>
    </FormControl>
      
      </div>
    </div>
    </div>
  );
};
export default paymentMethods;
