import React, { useState,useEffect } from 'react';
import Block from '../../BlockInfor/BlockInfor'
import Paginator from './Paginator'
import Pagination from '@material-ui/lab/Pagination';
import {useHistory,NavLink} from 'react-router-dom'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import InputRange from 'react-input-range';
import './ListProducts.css'
import './SideBar.css'
import 'react-input-range/lib/css/index.css'

const imgSrc=require('../../../Assets/banner.png')

const ListProducts =props=> {
 
    const initialPage=parseInt(localStorage.getItem('page'),10)
    const [page,setPage]=useState((initialPage)||1);
    const [posts,setPosts]=useState([]);
    let [filterProducts,setFilterProducts]=useState([]) 
    const [totalPosts,setTotalPosts]=useState(0)
    const [value, setValue] = useState({min:9800,max:766500});
    let history=useHistory();
    let options1=['Trang phục nữ','Đồ ngủ, đồ mặc nhà, đồ lót, đồ bơi','Phụ kiện nữ','Giày dép nữ']
    useEffect(()=>{
         loadPosts();
         history.push('/shop?='+page)
    },[page])
    
    const filterOption1=async(option)=>{
        if(filterProducts===null){
          filterProducts=filterProducts.filter(el=>el.productset_group_name.split('/')[2]===option)
          setFilterProducts(filterProducts)
        }
        filterProducts=posts.filter(el=>el.productset_group_name.split('/')[2]===option)
        setFilterProducts(filterProducts)
    }
    const filterOption2=async(option)=>{
      if(filterProducts===null){
        filterProducts=posts.filter(el=>el.rating_average>=option)
        setFilterProducts(filterProducts)
      }
        filterProducts=filterProducts.filter(el=>el.rating_average>=option)
        setFilterProducts(filterProducts)
    }
    const filterOption3=async()=>{
      if(filterProducts===null){
        filterProducts=posts.filter(el=>el.price>=value.min&&el.price <=value.max)
        setFilterProducts(filterProducts)
      } 
        filterProducts=filterProducts.filter(el=>el.price>=value.min&&el.price <=value.max)
        setFilterProducts(filterProducts)
    }
   const loadPosts =async () => {
      await fetch('https://personalecommerce.herokuapp.com'+'/products/productsShop?page=' + page)
          .then(res=>{
              if(res.status !==200){
                  throw new Error('Failed to fetch!')
              }
              return res.json()
          
        })
        .then(resData=>{
                let fetchedProducts=[];
               
            for(let key in resData.products){
                fetchedProducts.push({
                    ...resData.products[key],
                    id:resData.products[key]._id,
                })
            } 
            const totalPages=Math.ceil(resData.totalPages)
            setPosts(fetchedProducts)
            setTotalPosts(totalPages)
        })
          .catch(err=>console.log(err));
      };
  
    
      const handleChange=async(event,value)=>{
          setPage(value);
      await localStorage.setItem('page',value);
        
     window.scrollTo(0,0)
      }
      console.log(filterProducts)
    return (
        <React.Fragment>
        <div className="col-md-4 col-lg-2 sidebar" style={{display:'inline-block',marginTop:'22rem',paddingLeft:'0.4rem'}}>
        <div className="sidebar-box-2">
          <p className="heading mb-2 listProduct">DANH MỤC SẢN PHẨM</p>
          <ul style={{listStyle:'none',paddingLeft:'1.5rem'}}>
            <li onClick={()=>filterOption1(options1[0])}>{options1[0]}(211)</li>
            <li onClick={()=>filterOption1(options1[1])}>{options1[1]}(104)</li>
            <li onClick={()=>filterOption1(options1[2])}>{options1[2]}(107)</li>
            <li onClick={()=>filterOption1(options1[3])}>{options1[3]}(113)</li>
          </ul>
        </div>
        <div className="sidebar-box-2">
        <p className="heading mb-2 listProduct">ĐÁNH GIÁ</p>
          <ul style={{listStyle:'none',paddingLeft:'1.5rem'}}>
          <li onClick={()=>filterOption2(5)}>
            <Typography component="legend">Từ 5 sao</Typography>
            <Rating name="read-only" value={5} readOnly /></li>
          <li onClick={()=>filterOption2(4)}>
          <Typography component="legend">Từ 4 sao</Typography>
            <Rating name="read-only" value={4} readOnly />
            </li>
          <li onClick={()=>filterOption2(3)}>
          <Typography component="legend">Từ 3 sao</Typography>
            <Rating name="read-only" value={3} readOnly /></li>         
          </ul>
        </div>
        <div className="sidebar-box-2">
        <p className="heading mb-2 listProduct">CHỌN KHOẢNG GIÁ</p>
        <form>
          <InputRange maxValue={766500} minValue={9800} 
          value={value} onChange={value=>setValue(value)}
          ></InputRange>
      </form>
      <button id="price-slider-submit" onClick={()=>filterOption3()} type="button">OK</button>
        </div>   
        <div className="sidebar-banner" style={{width:'100%',marginTop:'1rem'}}>
        <a data-banner-title="Sacombank- Searchleft" href="https://tiki.vn/chuong-trinh/sacombank-samsung-giut-co-hon?src=search_sidebar_native_banner_group&_lc=Vk4wMzQwMTgwMDE%3D" title="Sacombank- Searchleft">
          <img style={{width:'100%'}} src="https://salt.tikicdn.com/ts/banner/f7/6d/a1/31d3eaaf6c068880b649cda6f40691ef.jpg" alt="Sacombank- Searchleft" className="img-responsive" />
        </a>
      </div>
      </div>
        <div className="col-md-8 col-lg-10" style={{display:'inline-block',marginTop:'1rem'}}>
            <img src={imgSrc} alt="" style={{width:'100%',height:'auto',display:'block'}}></img>
       <Paginator 
       >
             {(filterProducts===null?filterProducts:posts).map(el=>(
                <Block key={el.id} imgSrc={el.thumbnail_url} link={el.id}
               title={el.name}
               price={el.list_price}
               discountPrice={el.price} 
               ></Block>              
           ))}
       </Paginator>
       <Pagination  color="primary"  count={totalPosts} page={page} onChange={handleChange} />
         </div>
        </React.Fragment>
   
    );
}

export default ListProducts