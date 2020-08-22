import React,{useState} from "react";
import "./ShippingMethods.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const shippingMethods = (props) => {
    const [shippingMethod, setShippingMethod] = useState('Giao Trong Ngày');

  const handleChangeShipping = (event) => {
    setValue(event.target.value);
  };
  return (
      <div className="styles__Left-hcztvk-1 ggAFge">
    <div className="container styles__Section-hcztvk-0 fwsEni">
      <h3 className="title">1. Chọn hình thức giao hàng</h3>
      <div className="ShippingMethods__StyledShippingMethods-sc-10myobp-0 iWIiNj">
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="shipping" value={value} onChange={handleChange}>
      <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Giao Trong Ngày" control={<Radio />} label="Giao Trong Ngày" />
        </div>
      <div className="ShippingMethods__StyledMethod-sc-10myobp-1 fFyyxJ">
        <FormControlLabel value="Giao Tiêu Chuẩn" control={<Radio />} label="Giao Tiêu Chuẩn" />
        </div>
      </RadioGroup>
    </FormControl>
      
      </div>
    </div>
    </div>
  );
};
export default shippingMethods;
