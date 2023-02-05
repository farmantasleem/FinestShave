import { HStack } from "@chakra-ui/react";
import React from "react";
import ProductItem from "../Product/ProductItem";

const BestSeller=()=>{
   return(
    <HStack pt="20px" pb="20px">
        <ProductItem img={"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/QlLJrYmaMcatup2AUtmfS/417d1c266574c7825643e0b1e654abac/cassette-6-blade-4-pk_3x.png?auto=format&fit=max&h=480&w=480&q=75&dpr=1"} title={"6 Blade Refills"} cost={"$200"}/>
        <ProductItem img={"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/1eK8ez8ekb8sOTP5JDF7zk/0a5894eac77f9b70ff6b017f07649cdd/handle-silver-white-1-ct_3x.png?auto=format&fit=max&h=480&w=480&q=75&dpr=1"} title={"6 Blade Refills"} cost={"$200"}/>
        <ProductItem img={"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/QlLJrYmaMcatup2AUtmfS/417d1c266574c7825643e0b1e654abac/cassette-6-blade-4-pk_3x.png?auto=format&fit=max&h=480&w=480&q=75&dpr=1"} title={"6 Blade Refills"} cost={"$200"}/>
        <ProductItem img={"https://dsc-cms.imgix.net/v1/qpbrd0hcmuyw/QlLJrYmaMcatup2AUtmfS/417d1c266574c7825643e0b1e654abac/cassette-6-blade-4-pk_3x.png?auto=format&fit=max&h=480&w=480&q=75&dpr=1"} title={"6 Blade Refills"} cost={"$200"}/>
    </HStack>
   )
}

export default BestSeller;