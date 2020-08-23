import React, { Component } from 'react';
import { Route,Switch,Redirect,withRouter} from 'react-router-dom'
import axios from 'axios'
import Login from '../src/Containers/Auth/Login/Login'
import Signup from '../src/Containers/Auth/Signup/Signup';
import Logout from '../src/Containers/Auth/Logout/Logout'
import ResetPassword from '../src/Containers/Auth/ForgetPassword/ResetPassword/ResetPassword'
import SetNewPassword from '../src/Containers/Auth/ForgetPassword/NewPassword/NewPassword'
import Index from '../src/Containers/Index/Index'
import Shop from '../src/Containers/Shop/Index'
import DetailProduct from '../src/Containers/DetailProduct/Index';

import Cart from '../src/Containers/Checkout/ShoppingCart/Index'
import Shipping from '../src/Containers/Checkout/Shipping/Index'
import Payment from '../src/Containers/Checkout/Payment/Index'
import CompleteOrder from '../src/Containers/Checkout/Index'
class App extends Component {
  state = {
    isAuth: false,
    token: null,
    userId: null,
    error: null,
    fetchedProducts:[]
  };
  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };
  componentDidMount() {
  
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    this.setState({ isAuth: true, token: token, userId: userId });
    this.setAutoLogout(remainingMilliseconds);
  }
  
  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('name');
    window.location.reload(false)
  };
  
  signupHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('https://personalecommerce.herokuapp.com'+'/auth/signup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.signupForm.email.value,
        password: authData.signupForm.password.value,
        name: authData.signupForm.name.value
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        this.props.history.push('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };
  loginHandler=(event,authData)=>{
    event.preventDefault();
    fetch('https://personalecommerce.herokuapp.com'+'/auth/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:authData.email,
        password:authData.password
      })
    })
    .then(res=>{
      if(res.status===422){
        throw new Error('Validation failed')
      }
      if(res.status !== 200 && res.status !==201){
        throw new Error('Could not authenticate you!')
      }
      return res.json()
    })
    .then(resData=>{
      this.setState({
        isAuth: true,
        token: resData.token,
        userId: resData.userId
      });
      localStorage.setItem('token',resData.token);
      localStorage.setItem('userId',resData.userId)
      const remainingMilliseconds=60*60*1000;
      const expiryDate=new Date(
        new Date().getTime() + remainingMilliseconds
      )
      localStorage.setItem('expiryDate',expiryDate.toISOString())
      this.setAutoLogout(remainingMilliseconds);
    })
    .then(result=>{
      this.props.history.push('/');
    })
    .catch(err=>{
      console.log(err)
      this.setState({
        isAuth: false,
        error: err
      });
    })
  }
 
  responseSuccessGoogle=(response)=>{
    axios({ 
      method:"POST",
      url:'https://personalecommerce.herokuapp.com'+'/auth/googleLogin',
      data:{tokenId:response.tokenId}
    })
    .then(res=>{
      if(res.status===422){
        throw new Error('Validation failed')
      }
      if(res.status !== 200 && res.status !==201){
        throw new Error('Could not authenticate you!')
      }
      
      return res.data
    })
    .then(resData=>{
      this.setState({
        isAuth: true,
        token: resData.token,
        userId: resData.userId
      });
      localStorage.setItem('token',resData.token);
      localStorage.setItem('userId',resData.userId);
      const remainingMilliseconds=60*60*1000;
      const expiryDate=new Date(
        new Date().getTime() + remainingMilliseconds
      )
      localStorage.setItem('expiryDate',expiryDate.toISOString())
      this.setAutoLogout(remainingMilliseconds);
    })
    .then(result=>{
      this.props.history.push('/');
    })
    .catch(err=>{
      console.log(err)
      this.setState({
        isAuth: false,
        error: err
      });
    })
  }
  responseErrorGoogle=(response)=>{
  }
  responseFacebook=(response)=>{
    axios({
      method:"POST",
      url:'https://personalecommerce.herokuapp.com'+'/auth/facebookLogin',
      data:{accessToken:response.accessToken,userID:response.userID,name:response.name}
    })
    .then(response=>{
      if(response.status===422){
        throw new Error('Validation failed')
      }
      if(response.status !== 200 && response.status !==201){
        throw new Error('Could not authenticate you!')
      }
    
      return response
    })
    .then(resData=>{
      console.log(resData)
      this.setState({
        isAuth: true,
        token: resData.accessToken,
        userId: resData.userID
      });
      localStorage.setItem('token',resData.token);
      localStorage.setItem('userId',resData.userId)
      const remainingMilliseconds=60*60*1000;
      const expiryDate=new Date(
        new Date().getTime() + remainingMilliseconds
      )
      localStorage.setItem('expiryDate',expiryDate.toISOString())
      this.setAutoLogout(remainingMilliseconds);
    })
    .then(result=>{
      this.props.history.push('/');
    })
    .catch(err=>{
      console.log(err)
      this.setState({
        isAuth: false,
        error: err
      });
    })
}



  render () {
    let routes=(
      <Switch>
 <Route 
        path="/reset"
        exact
        render={props=>(
          <ResetPassword {...props}></ResetPassword>
        )}
        />
        <Route path="/reset/:token" exact render={props=>(<SetNewPassword {...props} />)}></Route>
      <Route
        path="/login"
        exact
        render={props => (
          <Login
            {...props}
            onLogin={this.loginHandler} 
            responseSuccessGoogle={this.responseSuccessGoogle}
            responseErrorGoogle={this.responseErrorGoogle}
            responseFacebook={this.responseFacebook}
         
          />
        )}
      />
      <Route
        path="/signup"
        exact
        render={props => (
          <Signup
            {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}
            onSignup={this.signupHandler}          
          />
        )}
      />
     
      <Route
      path="/shop"
      exact 
      render={props=>(
        <Shop {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}></Shop>
      )}
      ></Route>
      <Route path="/cart" exact
       render={props=>(<Cart {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}></Cart>)}></Route>
        <Route
            path="/"
            exact
            render={props => (
              <Index userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth} />
            )}
          />
          
        <Route path="/:productId" exact
         render={props=>(< DetailProduct {...props}  userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}
          ></ DetailProduct>)} />
      <Redirect to="/" />
    </Switch>
    )
    if(this.state.isAuth){
      routes=(
        <Switch>
            <Route path="/logout" exact 
            render={props=>(<Logout {...props} onLogout={this.logoutHandler}></Logout>)} ></Route>
       <Route
      path="/shop"
      exact 
      render={props=>(
        <Shop {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}></Shop>
      )}
      ></Route>
      <Route path="/cart" exact  render={props=>(<Cart {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}></Cart>)}></Route>
     <Route path="/shipping" exact render={props=>(<Shipping {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth} />)}></Route>
     <Route path="/payment" 
      exact render={props=>(<Payment {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth} />)}></Route>
    <Route path="/completeOrder" exact render={props=>(<CompleteOrder {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}></CompleteOrder>)} ></Route>
     <Route path="/:productId" exact render={props=>(< DetailProduct {...props} userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth}></ DetailProduct>)} />

        <Route
            path="/"
            exact
            render={props => (
              <Index userId={this.state.userId} token={this.state.token} isAuth={this.state.isAuth} />
            )}
          />
          
      <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <div>
       {routes}
      </div>
   
    );
  }
}

export default withRouter(App);
