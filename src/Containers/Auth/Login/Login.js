import React, { Component } from "react";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { required, length, email } from "../../../util/validators";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import Footer from '../../../Components/MainComponents/Footer/Footer'

class Login extends Component {
  state = {
    loginForm: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, email],
      },
      password: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })],
      },
      formIsValid: false,
    },
  };
  
  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.loginForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.loginForm,
        [input]: {
          ...prevState.loginForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        loginForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        loginForm: {
          ...prevState.loginForm,
          [input]: {
            ...prevState.loginForm[input],
            touched: true,
          },
        },
      };
    });
  };

  render() {
    localStorage.removeItem("page");
    return (
      <div className="loginSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{display:'block',margin:'auto'}}>
              <div className="login-form">
              <a aria-current="page" className="navbar-brand login" href="/">Winkel</a>
                <h2 className="loginTitle">Login</h2>
                <form
                  onSubmit={(e) =>
                    this.props.onLogin(e, {
                      email: this.state.loginForm.email.value,
                      password: this.state.loginForm.password.value,
                    })
                  }
                >
                  <Input
                    id="email"
                    textLabel="Username or email address"
                    type="email"
                    onChange={this.inputChangeHandler}
                    onBlur={this.inputBlurHandler.bind(this, "email")}
                    value={this.state.loginForm["email"].value}
                    valid={this.state.loginForm["email"].valid}
                    touched={this.state.loginForm["email"].touched}
                  ></Input>
                  <Input
                    id="password"
                    textLabel="Password"
                    type="password"
                    onChange={this.inputChangeHandler}
                    onBlur={this.inputBlurHandler.bind(this, "password")}
                    value={this.state.loginForm["password"].value}
                    valid={this.state.loginForm["password"].valid}
                    touched={this.state.loginForm["password"].touched}
                  ></Input>
                  <div className="giCheck">
                    <div className="giMore">
                      <a href="/reset" className="forgetPass">
                        Forget your Password
                      </a>
                    </div>
                  </div>
                  <Button auth="SIGN IN"></Button>
                  <GoogleLogin className="google"
    clientId="817246329623-n2jra5ui603dkaugk86sfc5geef37mfm.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.props.responseSuccessGoogle}
    onFailure={this.props.responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  > <span> Login with Google</span></GoogleLogin>
   <FacebookLogin  className="facebook"
    appId="730621214163335"
    autoLoad={false}
    callback={this.props.responseFacebook} />
                </form>
                <div className="switchSignup">
                  <NavLink to="./signup" className="orSignup">
                    Or Create An Account
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Login;
