import { SimpleGrid, VStack,Image,Heading, Button} from "@chakra-ui/react";
import React from "react";
import skicare from "../../assets/skincare.jpg"
import shave from "../../assets/shave.jpg"
import blade from "../../assets/blade.jpg"
import starterkits from "../../assets/starterkits.jpg"
import { NavLink } from "react-router-dom";
const Category=()=>{
    return (<SimpleGrid p="10px" spacing={"20px"} columns={{base:2,md:4}}>
            <VStack>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={blade}/>
                <NavLink to={"/shop"}>  <Button  fontSize={"19px"}  bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)" minW={{base:"180",md:"240px"}} maxW={{base:"",md:"240px"}}>Blades & Handles</Button></NavLink>
            </VStack>
            <VStack>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={skicare}/>
                <NavLink to={"/shop"}>   <Button fontSize={"19px"}  bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)"  minW={{base:"180",md:"240px"}} maxW={{base:"",md:"240px"}}>Skin Care</Button></NavLink>
            </VStack>
            <VStack>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={shave}/>
                <NavLink to={"/shop"}>     <Button fontSize={"19px"} bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)"  minW={{base:"180",md:"240px"}} maxW={{base:"",md:"240px"}}>Shave Aids</Button></NavLink>
            </VStack>
            <VStack>
                <Image minH={{base:"",md:"240px"}} maxH={{base:"",md:"240px"}} minW={{base:"",md:"220px"}} maxW={{base:"",md:"240px"}} src={starterkits}/>
                <NavLink to={"/shop"}>    <Button fontSize={"19px"} bgColor={"rgb(139,206,178)"} color="rgb(16,23,24)" minW={{base:"180",md:"240px"}} maxW={{base:"240px",md:"240px"}}>Starter Kits</Button></NavLink>
            </VStack>
    </SimpleGrid>)
}

export default Category