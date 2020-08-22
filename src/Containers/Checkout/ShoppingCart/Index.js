import React from 'react'
import SubNavagation from '../../../Components/MainComponents/SubNavigation/SubNavigation'
import Navigation from '../../../Components/MainComponents/Navigation/Navigation'
import Footer from '../../../Components/MainComponents/Footer/Footer'
import Cart from '../../../Components/CheckoutComponents/ShoppingCartComponents/ShoppingCart'

const Index=props=>{
    return(
        <div style={{overflow:'hidden'}}>
            <SubNavagation isAuth={props.isAuth}/>
            <Navigation/>
            <Cart isAuth={props.isAuth}/>
            <Footer/>
        </div>
    )
}
export default Index