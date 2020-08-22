import React from 'react'
import {NavLink} from 'react-router-dom'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

import aboutImage from '../../../Assets/about.jpg'
import medal from '../../../Assets/medal.jpg'
import recommend from '../../../Assets/recommend.jpg'
import box from '../../../Assets/box.jpg'
import './BlockInfor1.css'

const BlockInfor1 = props => {
    return (
        <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 img imgBlock1 d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${aboutImage})`}}>
              <NavLink to="https://vimeo.com/375445745" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                <span><PlayCircleFilledIcon></PlayCircleFilledIcon></span>
              </NavLink>
            </div>
            <div className="col-md-6  wrap-about">
              <div className="heading-section-bold mb-4">
                  <h2 className="mb-4">Better Way to Ship Your Products</h2>
              </div>
              <div className="pb-5">
                <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                <div className="row ftco-services">
                  <div className="col-lg-4 text-center d-flex">
                    <div className="media services">
                      <div className="icon d-flex justify-content-center align-items-center mb-4">
                        <span><img src={recommend} alt=""></img></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Refund Policy</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                      </div>
                    </div>      
                  </div>
                  <div className="col-lg-4 text-center d-flex">
                    <div className="media  services">
                      <div className="icon d-flex justify-content-center align-items-center mb-4">
                      <span><img src={box} alt=""></img></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Premium Packaging</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                      </div>
                    </div>    
                  </div>
                  <div className="col-lg-4 text-center d-flex">
                    <div className="media  services">
                      <div className="icon d-flex justify-content-center align-items-center mb-4">
                      <span><img src={medal} alt=""></img></span>
                      </div>
                      <div className="media-body">
                        <h3 className="heading">Superior Quality</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                      </div>
                    </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}



export default BlockInfor1
