import { Stack,Heading, HStack,Text,Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input,
    SimpleGrid,} from "@chakra-ui/react";
import React from "react";

const Address=()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <Stack direction="column" bgColor={"rgb(249,243,234)"} p="20px"> 
        <Heading color="rgb(0,18,51)" fontSize="22px">Deliver to</Heading>
        <Stack direction="column">
        <HStack minW={"full"} justifyContent="space-between">
                <Text>Name</Text>
                <Text>Farman</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>Mobile No</Text>
                <Text>+918800244186</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>Street</Text>
                <Text>Khanna Nagar</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>City</Text>
                <Text>Delhi</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>State</Text>
                <Text>Ghaziabad</Text>
                
            </HStack>
            <HStack minW={"full"} justifyContent="space-between">
                <Text>Zip Code</Text>
                <Text>201102</Text>
                
            </HStack>
            
        </Stack>
        <Button color="rgb(249,243,234)" bgColor={"rgb(0,18,51)"} onClick={onOpen}>Add/Update Address</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add/Update Address</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input  placeholder='Full name' />
            </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Mobile No</FormLabel>
              <Input placeholder='Mobile No' />
            </FormControl>
          
            <SimpleGrid columns={2} spacing="10px">
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input placeholder='City' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>State</FormLabel>
              <Input placeholder='State' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Landmark (Optional)</FormLabel>
              <Input placeholder='Landmark' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Zip Code</FormLabel>
              <Input placeholder='Zip Code' />
            </FormControl>
            </SimpleGrid>
            
          </ModalBody>

          <ModalFooter>
            <Button  bgColor="rgb(0,18,51)" color="rgb(249,243,234)" mr={3} >
              ADD
            </Button>
            <Button variant='ghost'>UPDATE</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        
        </Stack>
    
    )
}

export default Address