import React from 'react'
import {NavLink} from 'react-router-dom'

import './BlockInfor.css'


function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
const blockInfor=props=>{
    return(
      <div className="col-sm-6 col-md-6 col-lg-3" style={{display:'inline-flex'}}>
        <div className="product">
        <NavLink to={props.link}>
        <div className="content ">
          <div className="image">
            <img className="product-image img-responsive" src={props.imgSrc} alt="" />
          </div>
          <p className="title">
                   {props.title}  
              </p>

         {props.discountPrice?
    <p className="price-regular" style={{color:'black',fontWeight:'700'}}>{formatNumber(props.discountPrice)}đ</p>:null}
        {props.discountPrice?<p className="final-price" style={{textDecoration:'line-through',color:'gray'}}>{formatNumber(props.price)}đ </p>
        :<p className="final-price" style={{color:'black',fontWeight:'700'}}>{formatNumber(props.price)}đ </p>}  
    
        </div>
     
      </NavLink>
        </div>      
      </div>
    )
}
export default blockInfor