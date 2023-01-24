import { Box, Heading, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {MdAdd} from "react-icons/md"
import {BiMinus} from 'react-icons/bi'
import {RxCross2} from "react-icons/rx"
const CartItem=()=>{
    return(<Stack  maxW={{base:"100%",md:"630px"}} direction={{base:"column",md:"row"}} p="10px" pb="20px" borderBottom={"1px"} borderBottomColor="rgb(214,217,222)">
            <Box bgColor={"rgb(239,224,202)"} maxW="300px"><Img maxW={{base:"100%",md:"200px" }}src="https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/59GXLBbaDCgciYzZ9R2U2T/d3543dc8989afe942639e7115ed0cf06/cassette-6-blade-4-pk_3x.png?auto=format&fit=max&w=1446"/></Box>
            <Stack justifyContent={"space-between"} minW="400px">
                <HStack alignContent={"center"}  justifyContent={"space-between"} maxW={{base:"250px",md:"100%"}}>
                    <Stack direction={"column"}>
                        <Heading color="rgb(0,18,51)" fontSize={"22px"} fontWeight="400">Skin Care Bundle</Heading>
                        <Text>Category</Text>
                    </Stack>
                    <RxCross2 cursor={"pointer"} color="rgb(0,18,51)"/>
                </HStack>
                <HStack justifyContent={"space-between"} maxW={{base:"250px",md:"100%"}}>
                    <HStack p="5px" minW={"100px"} justifyContent="space-around" border={"2px"} borderColor="rgb(0,18,51)">
                        <BiMinus cursor={"pointer"}/>
                        <Heading fontSize={"17px"} fontWeight="400">0</Heading>
                        <MdAdd cursor={"pointer"}/>
                    </HStack>
                    <Heading fontSize={"22px"} color="rgb(0,18,51)" fontWeight="400"> $27</Heading>
                </HStack>
            </Stack>
    </Stack>)
}

export default CartItem