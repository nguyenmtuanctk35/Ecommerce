import React, { Component } from 'react'
import './Testimony.css'
import image1 from '../../../Assets/person_1.jpg'
import image2 from '../../../Assets/person_2.jpg'
import image3 from '../../../Assets/person_3.jpg'
import image4 from '../../../Assets/person_4.jpg'

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import CarouselComponent from './CarouselComponent/CarouselComponent'

class testimony extends Component{
        render(){  
    return(
        <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section">
              <h2 className="mb-4">Our satisfied customer says</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{overflowX:'hidden'}}>
                <OwlCarousel 
                    className="owl-theme"
                    loop
                    nav
                    
                >
                    <CarouselComponent imgSrc={image1}></CarouselComponent>
                    <CarouselComponent imgSrc={image2}></CarouselComponent>
                    <CarouselComponent imgSrc={image3}></CarouselComponent>
                    <CarouselComponent imgSrc={image4}></CarouselComponent>

                    {/* <CarouselComponent className="item" imgSrc={image1}></CarouselComponent>
                    <CarouselComponent className="item" imgSrc={image2}></CarouselComponent>
                    <CarouselComponent className="item" imgSrc={image3}></CarouselComponent>
                    <CarouselComponent className="item" imgSrc={image4}></CarouselComponent> */}
                </OwlCarousel>
              {/* <div className="carousel-testimony owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{transition: 'all 0.25s ease 0s', width: '1900px', transform: 'translate3d(0px, 0px, 0px)'}}>

             </div>
             </div>
          
                </div> */}
            </div>
          </div>
        </div>
      </section>
    )   
}
}
export default testimony