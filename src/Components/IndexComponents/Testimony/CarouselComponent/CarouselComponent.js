import React from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import './CarouselComponent.css'

const carouselComponent=props=>{
    return(
        <div className="item owl-item">
            <div className="testimony-wrap p-4 pb-5">
              <div className="user-img mb-5" style={{backgroundImage: `url(${props.imgSrc})`}}>
                <span className="quote d-flex align-items-center justify-content-center">
                    <FormatQuoteIcon className="icon-quote-left"/>
                </span>
              </div>
              <div className="text">
                <p className="mb-5 pl-4 line">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <p className="name">Garreth Smith</p>
                <span className="position">Marketing Manager</span>
              </div>
            </div>
          </div>
    )
}
export default carouselComponent
