import React, { Component } from "react";
import swal from 'sweetalert';
import Button from "../../../../Components/Button/Button";
import Input from "../../../../Components/Input/Input";
import "./NewPassword.css";
import { length,required } from "../../../../util/validators";
import Footer from '../../../../Components/MainComponents/Footer/Footer'

class Login extends Component {
  state = {
    ResetForm: {
        password: {
            value: "",
            valid: false,
            touched: false,
            validators: [required, length({ min: 5 })],
          },
      formIsValid: false,
    },
  };

  setNewPasswordHandler=async(event,authData)=>{
    event.preventDefault();
    fetch('https://personalecommerce.herokuapp.com'+'/auth/new-password',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
            },
      body:JSON.stringify({password:authData.password,token:this.props.match.params.token}),
    })
    .then(res=>res.json())
      .then(result=>{
          console.log(result)
        swal({
          title: "Change password successfully!",
          text: "Hello my friend! Just sign in and enjoy",
          icon: "success",
          buttons:{
            text:'OK'
          }
        })
        this.props.history.push('/login')
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
                <form  onSubmit={(e) =>this.setNewPasswordHandler(e, {
                      password: this.state.ResetForm.password.value})}>
                 <Input
                    id="password"
                    textLabel="Password"
                    type="password"
                    onChange={this.inputChangeHandler}
                    onBlur={this.inputBlurHandler.bind(this, "password")}
                    value={this.state.ResetForm["password"].value}
                    valid={this.state.ResetForm["password"].valid}
                    touched={this.state.ResetForm["password"].touched}
                  ></Input>
                  <Button auth="SET NEW PASSWORD"></Button>        
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
