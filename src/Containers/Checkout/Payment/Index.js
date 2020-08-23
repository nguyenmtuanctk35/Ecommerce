import React from 'react'
import Header from '../../../Components/CheckoutComponents/PaymentComponents/Header/Header'
import Footer from '../../../Components/MainComponents/Footer/Footer'
import Shipping from '../../../Components/CheckoutComponents/PaymentComponents/Main/Main'
const Index=props=>{
   
    return(
        <React.Fragment>
        <Header></Header>
        <Shipping isAuth={props.isAuth}></Shipping>
        <Footer ></Footer>   
        </React.Fragment>
    )
}
export default Index