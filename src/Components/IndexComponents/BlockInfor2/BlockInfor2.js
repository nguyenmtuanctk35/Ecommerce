import React, { useEffect,useState } from 'react'
import './BlockInfor2.css'
import Block from '../../BlockInfor/BlockInfor'

const BlockInfor2=props=>{
  const [pages, setPages] = useState([])
  const [fetched,setFetched]=useState(false)
    useEffect(()=>{
        loadPosts()
    },[])

    const loadPosts =async () => {
      await fetch('https://personalecommerce.herokuapp.com'+'/products/productsHomePage')
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
              
              setPages(fetchedProducts)
            }  
        })
        .then(result=>{
            setFetched(true)
        })
          .catch(err=>console.log(err));
      };
    return(
        <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center">
              <h2 className="mb-4">Best Sellers</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>   		
        </div>
        <div className="container">
            <div className="row">
                  {pages.map(el=>(
                           <Block key={el.id} imgSrc={el.thumbnail_url} link={el.id}
                    title={el.name}
                    price={el.list_price}
                    discountPrice={el.price} 
                    ></Block>              
                ))}
                      
                      </div>
              </div>
      </section>
    ) }

export default BlockInfor2