import { createSlice } from "@reduxjs/toolkit";

const initialState={data:[]};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(-1)
        }
,
        getCartItem(state,action){
            return {...state,data:action.payload}
        }
    }
})

export const {add,getCartItem} = cartSlice.actions;

export default cartSlice.reducer;


//Adding item to cart
export const addItem=(productid)=>{
    return async(dispatch,getState)=>{
            const userId=localStorage.getItem("TOKEN");
            if(userId?.length>10){
                const resp=await fetch("https://finestshave.onrender.com/cart",{
                    method:"POST",
                    headers:{"Content-type":"application/json","authorization":`bearer ${userId}`},
                    body:JSON.stringify({product:productid})
                })
                const data=await resp.json();
                console.log(data)
            }else{
                alert("Login to add Item To Cart")
            }
    }
}

//get Cart Item 
export const getItem=()=>{
    return async(dispatch,getState)=>{
            const userId=localStorage.getItem("TOKEN");
            if(userId?.length>10){
                const resp=await fetch("https://finestshave.onrender.com/cart",{
                    method:"GET",
                    headers:{"authorization":`bearer ${userId}`},
                
                })
                const data=await resp.json();
                dispatch(getCartItem(data||[]))
            }else{
                alert("Login to add Item To Cart")
            }
    }
}