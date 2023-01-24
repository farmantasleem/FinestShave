import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import User from "../Pages/User";


const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/user" element={<User/>}/>
        </Routes>
    )
}

export default AllRoutes