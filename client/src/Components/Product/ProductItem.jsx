import { Button, HStack, VStack,Stack,Heading,Text,Image,Box, useToast} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";

const ProductItem=(props)=>{
    const{title,img,cost,category,id}=props
    const dispatch=useDispatch()
    const handleCart=()=>{
        dispatch(addItem(id,toast,setStatus))
    }
    const toast=useToast()
    const [status,setStatus]=useState(false)
   return(
    <Stack gap="0px" maxW="400px" p="10px" spacing="0px" direction={"column"} justifyContent={"left"} textAlign="left">
        
        <Box  minW="250px"  minH={"250px"}   maxW="250px"  maxH={"250px"} bgColor={"rgb(240,224,199)"}>
        <Image minW="250px"  minH={"250px"}   maxW="250px"  maxH={"250px"}src={img}/>
        </Box>
        <Heading pt="10px" fontSize={"14px"}>{title}</Heading>
        <Text pt="5px" pb="20px" fontSize={"14px"}>{!category?"Category":category}</Text>
        <Heading  pb="20px" fontSize={"14px"}>{"₹ "+cost}</Heading>
        <Button _hover={{color:"rgb(240,224,199)"}} maxW={"40%"} borderRadius={"0px"} color="rgb(240,224,199)" bgColor="rgb(0,18,51)" m="auto" onClick={status?()=>{}:handleCart} >{status?"Added":"Add"}</Button>
    </Stack>
   )
}

export default ProductItem;