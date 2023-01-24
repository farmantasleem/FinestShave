import { createSlice } from "@reduxjs/toolkit";


const initialState={auth:false,name:"user",signup:false}
const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        logout(state,action){
            return {...state,auth:false}
        },
        loginSuccess(state,action){
            return {...state,auth:true,name:action.payload}
        },
        loginFailed(state,action){
            return {...state,auth:false}
        },
        signupSuccess(state,action){
            return {...state,signup:true}
        },
        signupFailure(state,action){
            return {...state,signup:"error"}
        },
        
    },
})

export const {loginFailed,loginSuccess,signupFailure}=userSlice.actions

export default userSlice.reducer

export function loginUser(data){
    return async function (dispatch,getState){
          try{
            const sendData=await fetch("https://finestshave.onrender.com/user/login",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            if(resp?.token?.length>10){
                localStorage.setItem("TOKEN",resp.token)
                dispatch(loginSuccess())
            }else{
                dispatch(loginFailed())
            }
            
          }catch(err){
           dispatch(loginFailed())
          }
    }
}

export function signupUser(data){
    return async function (dispatch,getState){
          try{
            const sendData=await fetch("https://finestshave.onrender.com/user/signup",{
                method:"POST",
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
            })
            const resp=await sendData.json();
            console.log(resp)
            
          }catch(err){
           dispatch(signupFailure())
          }
    }
}


