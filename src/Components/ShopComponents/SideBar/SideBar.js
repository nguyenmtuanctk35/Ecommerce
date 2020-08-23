import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import InputRange from 'react-input-range';

import './SideBar.css'
import 'react-input-range/lib/css/index.css'

const SideBar =props=>{
      const [value, setValue] = useState({min:9800,max:766500});

    const  handlePrice=event=>{
        // setValue(value)
        console.log(value)
      }
        return (
            <div className="col-md-4 col-lg-2 sidebar" style={{display:'inline-block',marginTop:'22rem',paddingLeft:'0.4rem'}}>
        <div className="sidebar-box-2">
          <p className="heading mb-2 listProduct">DANH MỤC SẢN PHẨM</p>
          <ul style={{listStyle:'none',paddingLeft:'1.5rem'}}>
        <li><NavLink to="/yzx">Trang phục nữ(211)</NavLink></li>
            <li><NavLink to="/xyz">Đồ ngủ, đồ mặc nhà, đồ lót, đồ bơi(104)</NavLink></li>
            <li><NavLink to="/xyz">Phụ kiện nữ(107)</NavLink></li>
            <li><NavLink to="/xyz">Giày dép nữ(113)</NavLink></li>
          </ul>
        </div>
        <div className="sidebar-box-2">
        <p className="heading mb-2 listProduct">ĐÁNH GIÁ</p>
          <ul style={{listStyle:'none',paddingLeft:'1.5rem'}}>
          <li>
            <Typography component="legend">Từ 5 sao</Typography>
            <Rating name="read-only" value={5} readOnly />
          </li>
          <li>
          <Typography component="legend">Từ 4 sao</Typography>
            <Rating name="read-only" value={4} readOnly />
           </li>
          <li>
          <Typography component="legend">Từ 3 sao</Typography>
            <Rating name="read-only" value={3} readOnly />
            </li>         
          </ul>
        </div>
        <div className="sidebar-box-2">
        <p className="heading mb-2 listProduct">CHỌN KHOẢNG GIÁ</p>
        <form>
          <InputRange maxValue={766500} minValue={9800} 
          value={value} onChange={value=>setValue(value)}
          ></InputRange>
      </form>
      <button id="price-slider-submit" onClick={()=>handlePrice()} type="button">OK</button>
        </div>   
        <div className="sidebar-banner" style={{width:'100%',marginTop:'1rem'}}>
        <a data-banner-title="Sacombank- Searchleft" href="https://tiki.vn/chuong-trinh/sacombank-samsung-giut-co-hon?src=search_sidebar_native_banner_group&_lc=Vk4wMzQwMTgwMDE%3D" title="Sacombank- Searchleft">
          <img style={{width:'100%'}} src="https://salt.tikicdn.com/ts/banner/f7/6d/a1/31d3eaaf6c068880b649cda6f40691ef.jpg" alt="Sacombank- Searchleft" className="img-responsive" />
        </a>
      </div>
      </div>
        )
   
}
export default SideBar