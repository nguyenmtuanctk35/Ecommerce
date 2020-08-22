import React from "react";
import {NavLink} from 'react-router-dom'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import "./Header.css";

function getSteps() {
    return ['Đăng nhập','Địa chỉ giao hàng','Thanh toán & Đặt mua '];
  }
const header = () => {
    const activeStep=1
    const steps = getSteps();

  return (
    <header className="Header__StyledHeader-hmoohz-0 iQydii">
      <div className="container header-container Container-itwfbd-0 jFkAwY">
        <div className="logo">
        <NavLink to='/' exact={true}  className="navbar-brand navbar-brandd">Winkel</NavLink>
        </div>
        <Stepper alternativeLabel activeStep={activeStep} style={{width:'60%'}}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
       <div className="hotline" style={{width:'20%'}}>
          <img src="https://frontend.tikicdn.com/_desktop-next/static/img/hotline.png" alt="" />
        </div>
        </div>
    </header>
  );
};
export default header;
