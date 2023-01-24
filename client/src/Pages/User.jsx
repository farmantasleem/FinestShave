import {Checkbox, Center, Container,FormControl,FormLabel,FormErrorMessage, FormHelperText,Input,Tabs, TabList, TabPanels, Tab, TabPanel, Button, HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, signupUser } from "../redux/userSlice";

const User = () => {
  const [userData,setuserData]=useState({
      email:"",
      password:"",
      name:""
  })

  const dispatch=useDispatch()
  const handleLogin=()=>{
      dispatch(loginUser(userData))
  }

  const handleRegister=()=>{
    dispatch(signupUser(userData))
  }
  return (
    <Container bgColor={"rgb(0,18,51)"} minW="100%" minH={"500px"}>
    <Center>
    <Tabs margin={"40px"} minH={{md:"400px"}}  minW={{md:"400px"}} borderRadius="10px" maxW="400px" bgColor="white" padding={"20px"}>
  <TabList>
   <HStack minW="100%" justifyContent={"center"}> <Tab>LOGIN</Tab>
    <Tab>REGISTER</Tab>
   </HStack>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Center >
      <VStack>
      <FormControl gap={"20px"}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="Password" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          <Checkbox mt="20px" defaultChecked>Remember me</Checkbox>
          <Button mt="30px" minW="100%" bgColor="rgb(202,225,249)" color="rgb(0,18,51)" onClick={handleLogin}>LOGIN</Button>
          </FormControl>
      </VStack>

        
      
      </Center>
    </TabPanel>
    <TabPanel>
    <Center>
        <FormControl>
        <FormLabel>Name</FormLabel>
          <Input type="text" value={userData.name} onChange={(e)=>{setuserData({...userData,name:e.target.value})}}/>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={userData.email} onChange={(e)=>{setuserData({...userData,email:e.target.value})}}/>
          <FormLabel>Password</FormLabel>
          <Input type="text" value={userData.password} onChange={(e)=>{setuserData({...userData,password:e.target.value})}} />
          
          
          <Button mt="30px" minW="100%" onClick={handleRegister}>REGISTER</Button>
        
        </FormControl>
      </Center>
    </TabPanel>
 
  </TabPanels>
</Tabs>
    </Center>
      
    </Container>
  );
};

export default User