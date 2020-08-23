import axios from 'axios'
import * as actionTypes from './ActionTypes'


export const fetchProductsSuccess=(products,totalPages)=>{
    return{
        type:actionTypes.FETCH_PRODUCTS_SUCCESS,
        products:products,
        totalPages:totalPages
    }
}
export const fetchProductsStart=()=>{
    return {
        type:actionTypes.FETCH_PRODUCTS_START
    }
}
export const fetchProductsFail=error=>{
    return {
        type:actionTypes.FETCH_PRODUCTS_FAIL,
        error:error
    }
}

export const fetchProductsIndex=()=>{
    return dispatch=>{
        dispatch(fetchProductsStart())
        fetch('https://personalecommerce.herokuapp.com'+'/products/productsHomePage')
            .then(res=>{
                let fetchedProducts=[];
                for(let key in res.data.products){
                    fetchedProducts.push({
                        ...res.data.products[key].data,
                        id:res.data.products[key]._id
                    })
                }
                dispatch(fetchProductsSuccess(fetchedProducts))
            })
            .catch(err=>{
                dispatch(fetchProductsFail(err))
            })
    }
}

export const fetchProductsShop=()=>{
    return dispatch=>{
        dispatch(fetchProductsStart());
       axios.get('https://personalecommerce.herokuapp.com'+'/products/productsShop')
            .then(res=>{
                let fetchedProducts=[];
                for(let key in res.data.products){
                    fetchedProducts.push({
                        ...res.data.products[key],
                        id:res.data.products[key]._id,
                    })
                }
                const totalPages=res.data.totalPages
                dispatch(fetchProductsSuccess(fetchedProducts,totalPages))
            }) .catch(err=>{
                 dispatch(fetchProductsFail(err))
            })  
            }   
        }