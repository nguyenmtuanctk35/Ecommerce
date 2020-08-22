import React, { useState,useEffect } from 'react';
import Block from '../../BlockInfor/BlockInfor'
import Paginator from './Paginator'
import Pagination from '@material-ui/lab/Pagination';
import './ListProducts.css'
import {useHistory} from 'react-router-dom'
const imgSrc=require('../../../Assets/banner.png')

const ListProducts =props=> {
 
    const initialPage=parseInt(localStorage.getItem('page'),10)
    const [page,setPage]=useState((initialPage)||1);
    const [posts,setPosts]=useState([]);
    const [totalPosts,setTotalPosts]=useState(0)
    useEffect(()=>{
         loadPosts();
         history.push('/shop?='+page)
    },[page])

    let history=useHistory();
   const loadPosts =async () => {
      await fetch(process.env.BACKEND_URL+'/products/productsShop?page=' + page)
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
    return (
      
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
       <Pagination  color="primary"  count={totalPosts} page={page} onChange={handleChange} />

         </div>
   
    );
}

export default ListProducts