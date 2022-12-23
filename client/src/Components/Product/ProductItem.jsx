import { Button, HStack, VStack,Heading,Text,Image} from "@chakra-ui/react";
import React from "react";

const ProductItem=(props)=>{
    const{title,img,cost}=props
   return(
    <VStack>
        <Image src={img}/>
        <Heading>{title}</Heading>
        <Text>{"Category"}</Text>
        <Heading>{cost}</Heading>
        <Button>Add</Button>
    </VStack>
   )
}

export default ProductItem;