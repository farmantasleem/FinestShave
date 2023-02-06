import { Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../Product/ProductItem";

const BestSeller=()=>{
    const productData=useSelector((state)=>state.product.data)
   return(
    <Stack pt="20px" pb="20px" direction={{base:"column",md:"row"}}>
        {
            productData?.map((e,i)=>{
               const {title,image,cost,category,id}=e
                if(i<4){
                    return <ProductItem img={image} title={title} cost={cost*82} category={category} id={id}/>
                }
            })
        }
      
    </Stack>
   )
}

export default BestSeller;