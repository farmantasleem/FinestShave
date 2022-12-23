import React from "react";
import {   Drawer,  DrawerBody,Button, DrawerFooter,DrawerHeader,DrawerOverlay,  DrawerContent, DrawerCloseButton, VStack, useDisclosure,  } from '@chakra-ui/react'
import {BsFillCartFill} from "react-icons/bs"
import {RiMenu3Line} from "react-icons/ri"
function NavbarMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          <RiMenu3Line/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Finest Shave</DrawerHeader>
  
            <DrawerBody bgColor={"rgb(0,18,51)"}>
              <VStack color="rgb(239,224,201)">
              <Button _hover={""} color="rgb(16,23,24)" bgColor="white">Home</Button>
            <Button _hover={""}bgColor="transparent">Shop</Button>
            <Button _hover={""} bgColor="transparent">Contact</Button>
            <Button _hover={""}bgColor="transparent">About</Button>
            <Button _hover={""}bgColor="transparent">Sign In</Button>
            <BsFillCartFill/>
              </VStack>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default NavbarMobile