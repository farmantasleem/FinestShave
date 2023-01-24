import { Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import {BsFillCartFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar=()=>{
    const state=useSelector((state)=>state.user)
   
    return(<HStack display={{base:"none",md:"flex"}} color="rgb(239,224,201)" p="15px" pl="30px" pr="30px" justifyContent={"space-between"} bgColor={"rgb(0,18,51)"}>
        <Heading letterSpacing={"1.5px"} fontSize={"25px"}>Finest Shave</Heading>
        <HStack>
            <Button _hover={""} bgColor="transparent" ><NavLink to={"/"}>Home</NavLink></Button>
            <Button _hover={""}bgColor="transparent"><NavLink to={"/shop"}>Shop</NavLink></Button>
            <Button _hover={""} bgColor="transparent"><NavLink  to="/contact">Contact</NavLink></Button>
            <Button _hover={""}bgColor="transparent">About</Button>
            <Button _hover={""}bgColor="transparent"><NavLink  to={state.auth?"/dashboard":"/user"}>{state.auth?"Dashboard":"Login/Register"}</NavLink></Button>
            <NavLink to="/cart"> <BsFillCartFill/></NavLink>
        </HStack>
    </HStack>)
}

export default Navbar