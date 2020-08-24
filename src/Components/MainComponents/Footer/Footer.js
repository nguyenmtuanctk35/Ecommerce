import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './Footer.css'

const Footer=props=>{
  
  const handleClick=()=>{
    window.scrollTo(0, 0);
}
    return(
        <footer className=" bg-light ftco-section ftco-footer" style={{marginTop: '1rem'}}>
        <div className="container" style={{paddingTop:'2rem'}}>
          <div className="row">
            <div className="mouses" onClick={handleClick}>
              <a href="# " className="mouse-icon">
                <div className="mouse-wheel"><span><ArrowUpwardIcon/></span></div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="navbar-brand">Winkel</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-1">
                  <li className="ftco-animated"><p><span><TwitterIcon/></span></p></li>
                  <li className="fftco-animated"><p><span><FacebookIcon/></span></p></li>
                  <li className="ftco-animated"><p><span><InstagramIcon/></span></p></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li><p className="d-block">Shop</p></li>
                  <li><p className="d-block">About</p></li>
                  <li><p className="d-block">Journal</p></li>
                  <li><p className="d-block">Contact Us</p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li><p className="d-block">Shipping Information</p></li>
                    <li><p className="d-block">Returns &amp; Exchange</p></li>
                    <li><p className="d-block">Terms &amp; Conditions</p></li>
                    <li><p className="d-block">Privacy Policy</p></li>
                  </ul>
                  <ul className="list-unstyled">
                    <li><p className="d-block">FAQs</p></li>
                    <li><p className="d-block">Contact</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Contact Information</h2>
                <div className="block-23 mb-3">
                  <ul style={{listStyle:'none',paddingLeft:'0'}}>
                    <li><span className="icon"><RoomIcon/></span><span className="text">KTX DHQG,Khu phố 6, phường Linh Trung, quận Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</span></li>
                    <li><span className="icon"><PhoneIcon/></span><span className="text">039 23 63 634</span></li>
                    <li><span className="icon"><EmailIcon/></span><span className="text">shinjnt4@gmail.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer