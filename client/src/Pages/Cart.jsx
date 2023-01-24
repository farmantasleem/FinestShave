import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Address from "../Components/Cart/Address";
import CartItem from "../Components/Cart/CartItem";
import Total from "../Components/Cart/Total";
import { getItem } from "../redux/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
       dispatch( getItem())
    },[])
    return(
    <Stack direction={{base:"column",md:"row"}} maxW="100vw" overflow={"hidden"} justifyContent="space-between" p="40px">
        <Stack direction={"column"} spacing="20px">
            <Heading fontSize={"19px"} pl="10px" color="rgb(0,18,51)" pb="20px" borderBottom={"2px"} borderBottomColor="rgb(0,18,51)">Your Cart</Heading>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>

        </Stack>

    <Stack direction="column">
        <Address/>
    <Total/>
    </Stack>
    </Stack>)
}

export default Cart;