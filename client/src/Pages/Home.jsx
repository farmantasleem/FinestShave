import { Button, Heading, Stack, VStack,Text, Container,Image, Box, Center} from "@chakra-ui/react";
import React from "react";
import homeproduct from "../assets/homeproduct.jpg"
import BestSeller from "../Components/Home/BestSeller";
import Category from "../Components/Home/Category";
import Compare from "../Components/Home/Compare";

const Home=()=>{
    return(<Container overflow={"hidden"} p="0px" minW="100vw" maxW="100vw">
        <Stack p="10px" pt="40px" pl={{base:"10",md:"100px"}} pb={{base:"10px",md:"100px"}} justifyContent={"space-between"}  alignItems={"center"}  minW="100vw" bgColor={"rgb(16,23,24)"} direction={{base:"column-reverse",md:"row"}}>
            <Stack gap="20px" direction={"column"}  textAlign={"left"} overflow={"hidden"} minW="50%">
           
                <Heading textAlign={"left"}  maxW="400px" fontSize={"50px"}  color="rgb(139,206,178)">
                BEARD & BALLS REVOLUTION
                </Heading>
                <Text  textAlign={"left"} color="rgb(139,206,178)">
                Our newest product is going to change the trimming game.

                </Text>
            
                <Button fontSize={{base:"20px",md:"18px"}} minH="45px" color="black" maxW={{"base":"100%",md:"220px"}} minW={{"base":"100%",md:"220px"}} bgColor={"rgb(177,125,76)"}>Take A Look</Button>
          
            </Stack>
           <Box bgImage={homeproduct}  bgSize="100%" bgRepeat="no-repeat" maxW={{base:"100%",md:"500px"}} maxH={{base:"400px",md:"450px" }} minW={{base:"100%",md:"500px"}} minH={{base:"400px",md:"450px" }} ></Box>
        </Stack>
     <Center pb="40px" bgColor={"rgb(16,23,24)"} >
     <Category/>
     </Center>
     <Center pt="40px" pb="40px" bgColor="rgb(249,243,234)">
        <Compare/>
    </Center>
    <BestSeller/>
    </Container>
   
        
    )
}

export default Home;