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

function change_alias(alias) {
 let str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
  str = str.replace(/ + /g," ");
  str = str.trim(); 
  return str;
}
const ListProducts =props=> {
 
    const initialPage=parseInt(localStorage.getItem('page'),10)
    const [page,setPage]=useState((initialPage)||1);
    const [posts,setPosts]=useState([]);
    const [totalPosts,setTotalPosts]=useState(0)
    const [value, setValue] = useState({min:9800,max:766500});
    const [priceRange,setPriceRange]=useState({min:9800,max:766500})
    const [rating,setRating]=useState(0)
    const [typeClothes,setTypeClothes]=useState('')
    let history=useHistory();
   useEffect(()=>{
         loadPosts();
        if(typeClothes===''){
          history.push('/shop?price='+priceRange.min+'%2C'+priceRange.max+'&rating='+rating+'&page='+page)
        }
        else{
        history.push('/shop/'+urlPara+'/'+'?price='+priceRange.min+ '%2C'+priceRange.max+'&rating='+rating+'&page='+page)

        }
      },[page,priceRange,rating])
    
    let options1=['Trang phục nữ','Đồ ngủ, đồ mặc nhà, đồ lót, đồ bơi','Phụ kiện nữ','Giày dép nữ']
    let urlPara=null
    if(typeClothes!==''){
      urlPara=((encodeURIComponent(change_alias(typeClothes)).split('%20')).join('-'))
    }
    // console.log(((encodeURIComponent(change_alias(options1[1]))).split('%20')).join('-'))
    const filterOption1=async(option)=>{
      setTypeClothes(option)
      await localStorage.setItem('typeClothes',typeClothes)
      window.scrollTo(0,0)
    }
    const filterOption2=async(option)=>{
        setRating(option)
        await localStorage.setItem('rating',rating)
        window.scrollTo(0,0)
    }
    const filterOption3=async()=>{
    setPriceRange({min:value.min,max:value.max});
     await localStorage.setItem('priceRange',priceRange)
     window.scrollTo(0,0)
    }
  
   const loadPosts =async () => {
    let url='https://personalecommerce.herokuapp.com'+'/products/productsShop?price='+priceRange.min+ '%2C'+priceRange.max+'&rating='+rating+'&page='+page
    if(typeClothes!==''){
      let url='https://personalecommerce.herokuapp.com'+'/products/productsShop/'+urlPara+'/'+'?price='+priceRange.min+ '%2C'+priceRange.max+'&rating='+rating+'&page='+page
        }
     
    
      await fetch(url)
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
      const handleChangePage=async(event,valuePage)=>{
          setPage(valuePage);
      await localStorage.setItem('page',valuePage);     
     window.scrollTo(0,0)
      }
    return (
        <React.Fragment>
        <div className="col-md-4 col-lg-2 sidebar" style={{display:'inline-block',marginTop:'22rem',paddingLeft:'0.4rem'}}>
        <div className="sidebar-box-2">
          <p className="heading mb-2 listProduct">DANH MỤC SẢN PHẨM</p>
          <ul className="t" style={{listStyle:'none',paddingLeft:'1.5rem'}}>
            <li onClick={()=>filterOption1(options1[0])}>{options1[0]}(211)</li>
            <li onClick={()=>filterOption1(options1[1])}>{options1[1]}(104)</li>
            <li onClick={()=>filterOption1(options1[2])}>{options1[2]}(107)</li>
            <li onClick={()=>filterOption1(options1[3])}>{options1[3]}(113)</li>
          </ul>
        </div>
        <div className="sidebar-box-2">
        <p className="heading mb-2 listProduct">ĐÁNH GIÁ</p>
          <ul className="rating" style={{listStyle:'none',paddingLeft:'1.5rem'}}>
          <li onClick={()=>filterOption2(5)}>
            <Typography component="legend">Từ 5 sao</Typography>
            <Rating name="read-only" precision={0.1} value={5} readOnly /></li>
          <li onClick={()=>filterOption2(4)}>
          <Typography component="legend">Từ 4 sao</Typography>
            <Rating name="read-only" precision={0.1} value={4} readOnly />
            </li>
          <li onClick={()=>filterOption2(3)}>
          <Typography component="legend">Từ 3 sao</Typography>
            <Rating name="read-only" precision={0.1} value={3} readOnly /></li>         
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
             {posts.map(el=>(
                <Block key={el.id} imgSrc={el.thumbnail_url} link={el.id}
               title={el.name}
               price={el.list_price}
               discountPrice={el.price} 
               ></Block>              
           ))}
       </Paginator>
       <Pagination  color="primary"  count={totalPosts} page={page} onChange={handleChangePage} />
         </div>
        </React.Fragment>
   
    );
}

export default ListProducts