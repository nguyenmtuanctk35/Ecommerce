import React from 'react'
import SubNavagation from '../../Components/MainComponents/SubNavigation/SubNavigation'
import Navigation from '../../Components/MainComponents/Navigation/Navigation'
import Footer from '../../Components/MainComponents/Footer/Footer'
import Infor from '../../Components/Infor/Infor'
import './DetailProduct.css'
import '../../Components/IndexComponents/Overall.css'


 const DetailProduct = props => {
    return (
        <div>
            <SubNavagation isAuth={props.isAuth}></SubNavagation>
            <Navigation></Navigation>
            <Infor></Infor>
            <Footer></Footer>
        </div>
    )
}



export default DetailProduct
