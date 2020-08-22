import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {NavLink} from 'react-router-dom'
import image1 from '../../../Assets/bg_1.jpg'
import image2 from '../../../Assets/bg_2.jpg'

import {Fade} from 'react-slideshow-image'
import './SlideShow.css'

const fadeProperties={
    duration:5000,
    transitionDuration:500,
    infinite:true,
    nextArrow:null,
    prevArrow:null

}
const slideShow=props=>{
    return(
        <section className="hero">
            <Fade {...fadeProperties}>
            <div className="each-fade">
            <div className="image-container" style={{backgroundImage:`url(${image1})`,backgroundRepeat:'no-repeat'}}>
            {/* <img className="one-third order-md-last img js-fullheight" alt="" src={image1}></img> */}
            </div>
            <div className="content-container ">
                          <span className="subheading">Winkel eCommerce Shop</span>
                          <div className="horizontal">
                            <h3 className="vr">Stablished Since 2000</h3>
                            <h1 className="mb-4 mt-3">Catch Your Own <br /><span>Stylish &amp; Look</span></h1>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                           <NavLink to="/ " className="btn btn-primary px-5 py-3 mt-3">Discover Now</NavLink>
                          </div>
            </div>
        </div>
        <div className="each-fade">
            <div className="image-container" style={{backgroundImage:`url(${image2})`,backgroundRepeat:'no-repeat'}}>
            {/* <img className="one-third order-md-last img js-fullheight" alt="" src={image2}></img> */}
            </div>
            <div className="content-container">
                          <span className="subheading">Winkel eCommerce Shop</span>
                          <div className="horizontal">
                            <h3 className="vr">Best eCommerce Online Shop</h3>
				            <h1 className="mb-4 mt-3">A Thouroughly <span>Modern</span> Woman</h1>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                          <NavLink to="/ " className="btn btn-primary px-5 py-3 mt-3">Discover Now</NavLink>
                          </div>
            </div>
        </div>
            </Fade>
         </section>
    )
}
export default slideShow
