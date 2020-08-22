import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'

const Logout=props=>{
   useEffect(()=>{
    props.onLogout()
   },[props.onLogout()])   
        localStorage.removeItem('page')
        return <Redirect to="/" />
    
}
export default Logout

