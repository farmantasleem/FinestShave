import { Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Total=()=>{
    return(
        <Stack direction={"column"} bgColor={"rgb(249,243,234)"} minW={{base:"",md:"400px"}} maxW="100vw" p="20px" gap="20px" maxH="400px">
            <Heading color="rgb(0,18,51)" fontSize="22px">Summary</Heading>
           <Stack direction={"column"}>
           <HStack minW={"full"} justifyContent="space-between">
                <Text>Subtotal</Text>
                <Text>$57.25</Text>
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>Shipping Discount</Text>
                <Text>$0.00</Text>
            </HStack>
            <HStack minW={"full"} justifyContent="space-between"> 
                <Text>Tax (Calculated at checkout)</Text>
                <Text>$0.00</Text>
            </HStack>
           </Stack>
           <HStack minW={"full"} justifyContent="space-between">
                <Heading fontSize="22px">Balance</Heading>
                <Heading fontSize="22px">$67</Heading>
           </HStack>

           <Button color="rgb(249,243,234)" bgColor={"rgb(0,18,51)"}>Checkout</Button>
            
        </Stack>
    )
}

export default Total