import React from 'react'
import SubNavagation from '../../Components/MainComponents/SubNavigation/SubNavigation'
import Navigation from '../../Components/MainComponents/Navigation/Navigation'
import SlideShow from '../../Components/IndexComponents/SlideShow/SlideShow'
import BlockInfor1 from '../../Components/IndexComponents/BlockInfor1/BlockInfor1'
import BlockInfor2 from '../../Components/IndexComponents/BlockInfor2/BlockInfor2'
import SectionCounter from '../../Components/IndexComponents/SectionCounter/SectionCounter'
import Testimony from '../../Components/IndexComponents/Testimony/Testimony'
import SubFooter from '../../Components/MainComponents/SubFooter/SubFooter'
import Footer from '../../Components/MainComponents/Footer/Footer'
import '../../Components/IndexComponents/Overall.css'

const Index = props=> {
        localStorage.removeItem('page')
        return (
            <div style={{overflow:'hidden'}}>
        <SubNavagation isAuth={props.isAuth}></SubNavagation>
        <Navigation></Navigation>
        <SlideShow></SlideShow>
        <BlockInfor1></BlockInfor1>
        <BlockInfor2></BlockInfor2>
        <SectionCounter></SectionCounter>
        <Testimony></Testimony>
        <SubFooter></SubFooter>
        <Footer></Footer>
            </div>
          
        )
    }

export default Index