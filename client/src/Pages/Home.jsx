import { Button, Heading, Stack, VStack,Text, Container,Image, Box, Center} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import homeproduct from "../assets/homeproduct.jpg"
import BestSeller from "../Components/Home/BestSeller";
import Category from "../Components/Home/Category";
import Compare from "../Components/Home/Compare";
import { fetchProducts } from "../redux/productSlice";
const Home=()=>{

    const disptach=useDispatch();

    useEffect(()=>{
        disptach(fetchProducts())
    },[])

    return(<Container overflow={"hidden"} p="0px" minW="100vw" maxW="100vw">
        <Stack p="10px" pt="40px" pl={{base:"10",md:"100px"}} pb={{base:"10px",md:"100px"}} justifyContent={"space-between"}  alignItems={"center"}  minW="100vw" bgColor={"rgb(16,23,24)"} direction={{base:"column-reverse",md:"row"}}>
            <Stack gap="20px" direction={"column"}  textAlign={"left"} overflow={"hidden"} minW="50%">
           
                <Heading textAlign={"left"}  maxW="400px" fontSize={"50px"}  color="rgb(139,206,178)">
                BEARD & BALLS REVOLUTION
                </Heading>
                <Text  textAlign={"left"} color="rgb(139,206,178)">
                Our newest product is going to change the trimming game.

                </Text>
            
                <NavLink to={"/shop"}>        <Button _hover={""} fontSize={{base:"20px",md:"18px"}} rightIcon={<AiOutlineArrowRight/>} minH="45px" color="white" maxW={{"base":"100%",md:"220px"}} minW={{"base":"100%",md:"220px"}} bgColor={"rgb(0,18,51)"}>Take A Look</Button></NavLink>
          
            </Stack>
           <Box bgImage={homeproduct}  bgSize="100%" bgRepeat="no-repeat" maxW={{base:"100%",md:"500px"}} maxH={{base:"400px",md:"450px" }} minW={{base:"100%",md:"500px"}} minH={{base:"400px",md:"450px" }} ></Box>
        </Stack>
     <Center pb="40px" bgColor={"rgb(16,23,24)"} >
     <Category/>
     </Center>
     <Center pt="40px" pb="40px" bgColor="rgb(249,243,234)">
        <Compare/>
    </Center>
    <Heading pb="20px" pt="20px" pl="60px" ml={{base:"10px",md:"80px"}} fontSize="30px" color="rgb(0,18,51)">Our Best Seller</Heading>
    <Center>
    <BestSeller/>
    </Center>
    </Container>
   
        
    )
}

export default Home;