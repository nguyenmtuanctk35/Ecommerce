import React, { Component } from 'react'
import Button from '../../../Components/Button/Button'
import Input from '../../../Components/Input/Input'
import './Signup.css'
import { required,length,email } from '../../../util/validators';
import {NavLink} from 'react-router-dom'
import Footer from '../../../Components/MainComponents/Footer/Footer'

 class signup extends Component  {
   state={
     signupForm:{
      email: {
        value: '',
        valid:false,
        touched:false,
        validators:[required,email]
      },
      password: {
        value: '',
        valid:false,
        touched:false,
        validators:[required,length({min:5})]
      },
      name: {
        value: '',
        valid:false,
        touched:false,
        validators:[required]
    },
    formIsValid:false
     }
   }
    
    

    inputChangeHandler=(input,value)=>{
      this.setState(prevState=>{
        let isValid=true;
        console.log(prevState)
        for (const validator of prevState.signupForm[input].validators){
          isValid=isValid && validator(value)
          console.log(prevState.signupForm[input])
        }
        const updatedForm={
          ...prevState.signupForm,
          [input]:{
            ...prevState.signupForm[input],
            valid:isValid,
            value:value
          }
        }
        let formIsValid=true;
        for(const inputName in updatedForm){
          formIsValid=formIsValid && updatedForm[inputName].isValid
        }
        return{
          signupForm:updatedForm,
          formIsValid:formIsValid
        }
      })
    }

    inputBlurHandler=input=>{
      this.setState(prevState=>{
        return {
          signupForm:{
            ...prevState.signupForm,
            [input]:{
              ...prevState.signupForm[input],
              touched:true
            }
          }
        }
      })
    }
   render() {
     localStorage.removeItem('page')
     return (
      <div className='signupSection'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{display:'block',margin:'auto'}}>
            <div className="signup-form">
            <a aria-current="page" className="navbar-brand signup" href="/">Winkel</a>
              <h2 className='signupTitle'>Register</h2>
              <form onSubmit={e=>this.props.onSignup(e,this.state)} style={{width:'100%',margin:'0',padding:'0'}} >
              <Input
               id="email"
               label="E-Mail"
               type='email'
               onChange={this.inputChangeHandler}
               onBlur={this.inputBlurHandler}
               value={this.state.signupForm['email'].value}
               valid={this.state.signupForm['email'].valid}
               touched={this.state.signupForm['email'].touched}
               textLabel="Username or email address" 
             ></Input>
      
              <Input
                id="name"
                label="name"
                type="name"
               textLabel="Your name"   
               onChange={this.inputChangeHandler}
               onBlur={this.inputBlurHandler}
               value={this.state.signupForm['name'].value}
               valid={this.state.signupForm['name'].valid}
               touched={this.state.signupForm['name'].valid}
               ></Input>
              
              <Input
               id="password"
               type="password"
               textLabel="Password"   
               onChange={this.inputChangeHandler}
               onBlur={this.inputBlurHandler}
               value={this.state.signupForm['password'].value}
               valid={this.state.signupForm['password'].valid}
               touched={this.state.signupForm['password'].touched}
               ></Input>
                <Button type="submit" auth="REGISTER"></Button>              
              </form>            
              <div className='switchLogin'>
                <NavLink to="/login" className='orLogin'>Or Login</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
     )
   }
     
}

export default signup
