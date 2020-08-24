import React from 'react'
import SubNavagation from '../../Components/MainComponents/SubNavigation/SubNavigation'
import Navigation from '../../Components/MainComponents/Navigation/Navigation'
import Footer from '../../Components/MainComponents/Footer/Footer'
import Main from '../../Components/ShopComponents/ListProducts/Main'
 const Index=(props)=>{
  
        return (
            <div>
                <SubNavagation isAuth={props.isAuth}></SubNavagation>
                <Navigation></Navigation>
                <main style={{backgroundColor:'#efefef'}}> 
                      <div className="container" style={{backgroundColor:'white'}}>
                    <div className="row">
                    <Main></Main>
                    </div>
                </div>    
                </main>
                <Footer></Footer>
            </div>
        )
 }
export default Index
