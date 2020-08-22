import React from 'react'
import SubNavagation from '../../Components/MainComponents/SubNavigation/SubNavigation'
import Navigation from '../../Components/MainComponents/Navigation/Navigation'
import Footer from '../../Components/MainComponents/Footer/Footer'
import SideBar from '../../Components/ShopComponents/SideBar/SideBar'
import ListProducts from '../../Components/ShopComponents/ListProducts/ListProducts'
 const Index=(props)=>{
        return (
            <div>
                <SubNavagation isAuth={props.isAuth}></SubNavagation>
                <Navigation></Navigation>
                <main style={{backgroundColor:'#efefef'}}> 
                      <div className="container" style={{backgroundColor:'white'}}>
                    <div className="row">
                          <SideBar></SideBar>
                <ListProducts></ListProducts>
                    </div>
                </div>    
                </main>
                       
                <Footer></Footer>
            </div>
        )
 }
export default Index
