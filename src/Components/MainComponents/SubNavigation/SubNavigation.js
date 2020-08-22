import React from 'react'
import {NavLink} from 'react-router-dom'
import './SubNavigation.css'

const subNavigation=(props)=>{

    return(
        <div className="py-1 bg-black">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  {/* <span className="text">{(name!==null&&name!==undefined)?{name}:null}</span> */}
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span style={{width:'100%'}} className="text">{props.isAuth
                  ?<NavLink to="/logout">Sign Out</NavLink>
                  :<span><NavLink to="/login">Sign In</NavLink><span><NavLink to="/signup" style={{marginLeft:'1rem'}}>Sign Up</NavLink></span></span>}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default subNavigation