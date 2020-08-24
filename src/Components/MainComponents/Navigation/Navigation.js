import React from 'react'
import {NavLink} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Navigation.css'

const navigation=(props)=>{
  const myCart=JSON.parse(localStorage.getItem('myCart'));
  let totalItem=[]
  let valueTotal=null
  if(myCart!==null&&myCart!==undefined){
      for(let el of myCart){
        totalItem=totalItem.concat(parseInt(el.counter,10))
      }
  }
  for(let val of totalItem){
    valueTotal +=val
  }
    return(
        <nav className="navbar ftco_navbar">
        <div className="container" style={{width:'100%',height:'100%'}}>
          <NavLink to='/' exact={true} className="navbar-brand">Winkel</NavLink>
          <div className="navbar-items">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact={true} className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to={{
                pathname:'/shop',
                search:"?price=9800%2C766500&rating=0&page=1"
              }} className="nav-link">Shop</NavLink></li>
              <li className="nav-item"><a href="https://tiki.vn/gioi-thieu-ve-tiki" className="nav-link">About</a></li>
              <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
     <li className="nav-item cta cta-colored"><NavLink to="/cart" className="nav-link"><span><ShoppingCartIcon></ShoppingCartIcon></span><span className="icon-shopping_cart" />{valueTotal}</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default navigation