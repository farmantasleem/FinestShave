import { Heading, HStack } from "@chakra-ui/react";
import AllRoutes from "./Allroutes/allRoutes";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Navbar/>
    <HStack p="20px"  bgColor={"rgb(0,18,51)"} display={{base:"flex",md:"none"}} justifyContent={"space-between"}>
      <Heading letterSpacing={"1.5px"} color="rgb(239,224,201)" fontSize={"19px"}>
        Finest Shave
      </Heading>
      <NavbarMobile/>
    </HStack>
  <AllRoutes/>
  <Footer/>
  
  </>
  );
}

export default App;
