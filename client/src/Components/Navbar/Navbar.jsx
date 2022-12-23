import { Button, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import {BsFillCartFill} from "react-icons/bs"
const Navbar=()=>{
    return(<HStack display={{base:"none",md:"flex"}} color="rgb(239,224,201)" p="15px" pl="30px" pr="30px" justifyContent={"space-between"} bgColor={"rgb(0,18,51)"}>
        <Heading letterSpacing={"1.5px"} fontSize={"25px"}>Finest Shave</Heading>
        <HStack>
            <Button _hover={""} color="rgb(16,23,24)" bgColor="white">Home</Button>
            <Button _hover={""}bgColor="transparent">Shop</Button>
            <Button _hover={""} bgColor="transparent">Contact</Button>
            <Button _hover={""}bgColor="transparent">About</Button>
            <Button _hover={""}bgColor="transparent">Sign In</Button>
            <BsFillCartFill/>
        </HStack>
    </HStack>)
}

export default Navbar