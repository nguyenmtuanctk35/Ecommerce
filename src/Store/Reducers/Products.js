import * as actionTypes from '../Action/ActionTypes'
import {updateObject} from '../utility'

const initialState={
    products:[],
    totalPages:0,
    loading:false
}
const fetchProductsStart=(state,action)=>{
    return updateObject(state,{loading:true})
}
const fetchProductsFail=(state,action)=>{
    return updateObject(state,{loading:false})
}
const fetchProductsSuccess=(state,action)=>{
    return updateObject(state,{
        products:action.products,
        totalPages:action.totalPages,
        loading:false
    }) 
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart(state,action)
        case actionTypes.FETCH_PRODUCTS_SUCCESS:return fetchProductsSuccess(state,action)
        case actionTypes.FETCH_PRODUCTS_FAIL:return fetchProductsFail(state,action)
        default:return state
    }
}

export default reducer