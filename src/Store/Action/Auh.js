import axios from 'axios';

import * as actionTypes from './ActionTypes'

export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    }
}
export const authSuccess=(token,userId)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
}
export const authFail=err=>{
    return {
        type:actionTypes.AUTH_FAIL,
        error:err
    }
}

export const logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTimeout=(expirationTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime*1000)
    }
}
export const setAuthRedirectPath=path=>{
    return{
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const login=(event,authData)=>{
    event.preventDefault();
    return dispatch=>{
        dispatch(authStart())
            fetch('https://personalecommerce.herokuapp.com'+'/auth/login',{
                method:'POST',
                headers:{
                    'Content-Typpe':'application/json'
                },
                body:JSON.stringify({
                    email:authData.email,
                    password:authData.password
                })
            })
            .then(res=>{
                if(res.status===422){
                    throw new Error('Validation failed')
                }
                if(res.status !==200 && res.status !==201){
                    throw new Error('Could not authenticate you!')
                }
                return res.json()
            })
            .then(resData=>{
                localStorage.setItem('token',resData.token);
                localStorage.setItem('userId',resData.userId);
                const remainingMilliseconds=60*60*1000;
                const expiryDate=new Date(
                    new Date().getTime()+remainingMilliseconds
                )
                localStorage.setItem('expiryDate',expiryDate.toISOString())
                this.checkAuthTimeout(remainingMilliseconds)
            })
            .catch(err=>{
                console.log(err)
            })

    }
}

export const signup=(event,authData)=>{
    event.preventDefault();
    return dispatch=>{
        fetch('https://personalecommerce.herokuapp.com'+'/auth/signup')
    }
}
export const authCheckState=()=>{
    return dispatch =>{
        const token=localStorage.getItem('token');
        if(!token){
            dispatch(logout())
        }
        else{
            const expirationDate=new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date){
                dispatch(logout())
            }
            else{
                const userId=localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000))
            }
        }
    }
}