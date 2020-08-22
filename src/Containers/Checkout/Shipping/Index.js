import React from 'react'
import Header from '../../../Components/CheckoutComponents/ShippingComponents/Header/Header'
import Main from '../../../Components/CheckoutComponents/ShippingComponents/Main/Main'
import Footer from '../../../Components/MainComponents/Footer/Footer'
const Index=props=>{
    return(
        <React.Fragment>
        <Header></Header>
        <Main isAuth={props.isAuth}></Main> 
        <Footer></Footer>   
        </React.Fragment>
    )
}
export default Index