import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";


const Footer=()=>{

    return(
        <Container pt={"20px"} overflow="hidden" minW={"100%"} minH="300px" color="rgb(239,224,202)" justifyContent={"center"} bgColor={"rgb(0,18,51)"}>
            <Stack minW={"500px"} maxW="500px" textAlign={"center"} margin={"auto"}>
                <Heading fontSize={"29px"}>Finest Shave</Heading>
                <Text maxW={"500px"}  minW={"500px"} fontSize={"17px"}>We disrupted the shaving industry in 2011 by delivering "Great Blades" at an awesome price, right to your door. We've been listening to our Members' needs ever since, and now have you covered from hair to toe with a growing list of top-shelf grooming products. We spend our days focused on helping you look, feel, and smell your best with the occasional office dog in our lap.</Text>
            </Stack>
        </Container>
    )
}

export default Footer