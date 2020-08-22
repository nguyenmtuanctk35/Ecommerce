import React, { Component } from "react";
import swal from 'sweetalert';
import Button from "../../../../Components/Button/Button";
import Input from "../../../../Components/Input/Input";
import "./ResetPassword.css";
import { email,required } from "../../../../util/validators";
import Footer from '../../../../Components/MainComponents/Footer/Footer'

class Login extends Component {
  state = {
    ResetForm: {
      email: {
        value: "",
        valid: false,
        touched: false,
        validators: [required, email],
      },
      formIsValid: false,
    },
  };

  resetPasswordHandler=async(event,authData)=>{
    event.preventDefault();
    fetch(process.env.BACKEND_URL+'/auth/reset-password',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
            },
      body:JSON.stringify({email:authData.email}),
    })
    .then(res=>res.json())
      .then(result=>{
        swal({
          title: "Send email!",
          text: "Winkel sent reset password email for you.Please check your email",
          icon: "success",
          buttons:{
            text:'OK'
          }
        })
        this.props.history.push('/')
      })
    .catch(err=>console.log(err))
  }
  inputChangeHandler = (input, value) => {
    this.setState((prevState) => {
      let isValid = true;
      for (const validator of prevState.ResetForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.ResetForm,
        [input]: {
          ...prevState.ResetForm[input],
          valid: isValid,
          value: value,
        },
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        ResetForm: updatedForm,
        formIsValid: formIsValid,
      };
    });
  };

  inputBlurHandler = (input) => {
    this.setState((prevState) => {
      return {
        ResetForm: {
          ...prevState.ResetForm,
          [input]: {
            ...prevState.ResetForm[input],
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
                <form  onSubmit={(e) =>this.resetPasswordHandler(e, {
                      email: this.state.ResetForm.email.value})}>
                  <Input
                    id="email"
                    textLabel="Username or email address"
                    type="email"
                    onChange={this.inputChangeHandler}
                    onBlur={this.inputBlurHandler.bind(this, "email")}
                    value={this.state.ResetForm["email"].value}
                    valid={this.state.ResetForm["email"].valid}
                    touched={this.state.ResetForm["email"].touched}
                  ></Input>
              
                  <Button auth="SEND EMAILL TO RESET PASSWORD"></Button>        
                </form>
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
