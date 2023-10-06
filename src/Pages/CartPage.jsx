import { Box, Button, Card, Flex, Image, Input, Text } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cartdataget, CartDelete } from '../Api/Api';
import { AuthContext } from '../ContextApi/AuthContextProvider';
import AddressPage from './AddressPage';

const CartPage = () => {
    const[cartdatas , setCartdata] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [Gst , setGst] = useState(0)
    const [finalPrice , setFinalPrice] = useState(0)
    const [coupoun , setcoupoun] = useState("")
    const [discount , setdiscount] = useState("")
   
    const toast = useToast()
    const { adresstotal ,setAddresstotal,addressGst  , setAddressGst,
      showEmpty , setshowEmpty
    } = useContext(AuthContext)
   const navigate = useNavigate()

  
useEffect(()=>{
  Cartdataget()
  .then((res)=>{
    setCartdata(res.data)
  })
},[])

let total = 0;
    let gst = 0
useEffect(() => {
  
    cartdatas.forEach((item) => {
      total += item.price * item.count;
      gst += (item.count*24.95);
    });
    setTotalPrice(total);
    setGst(gst)
    setFinalPrice(Math.floor(total+gst))
     setAddresstotal(total)
     setAddressGst(gst)
  }, [cartdatas]);





 const handleDelete=(id)=>{
    console.log(id)
    CartDelete(id).then((res) => {
       console.log(res)
       
        Cartdataget()
        .then((res)=>{
          setCartdata(res.data)
        })
       
    })
 }


 const handleQuantity = (id,count , value)=>{
  cartdatas.map((ele) => ele.id ===id ? (count= count +value) : count)

    axios.patch(`https://mock-server-json-x067.onrender.com/cart/${id}`, {
    
  count: count,
  }).then(() => {
         Cartdataget()
        .then((res)=>{
          setCartdata(res.data)
        })
  })

 }

 const handlePlaceorder = ()=>{
  
  navigate("/addresspage")
 }


 if(cartdatas.length===0){
  setshowEmpty(true)
 }
 else{
  setshowEmpty(false)
 }
// console.log(cartdatas)
// console.log(totalPrice);
// console.log(discount)
  
  return showEmpty ? <Box marginTop={"220px"} marginLeft="350px">
          <Image src='https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png' />
     
  </Box> :(
    <Box marginTop={"220px"} display="flex" flexDirection={{base:"column" ,md:"column" , lg:"row"}} gap={10} justifyContent="center"  marginLeft={{base:"50px" ,md:"120" , lg:"0px"}}>
        <Card height={"auto"} w={700} padding={10} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
        {
                cartdatas.map((el)=>{
                     
                   return <Flex display="flex" gap={20} >
                         <Box > 
                        
                        <Image marginBottom={10} src={el.image} alt={el.title}  w="100px"/>
                        </Box>
                      <Box alignContent={"center"} marginBottom={3}>
                        <Text fontWeight={"bold"}>{el.title}</Text>
                        <Text>{el.category}</Text>
                        <Text>₹ {el.price}</Text>
                        <Text>Quantity {el.count}</Text>
                        <Button  onClick={() => handleQuantity(el.id , el.count,1)} _hover={{bg:"#FFB951"}} bg={"#FFB951"} padding={2} marginRight="10px">+</Button>
                        <Button onClick={() => handleQuantity(el.id , el.count,-1)} isDisabled={el.count===1} _hover={{bg:"#FFB951"}} bg={"#FFB951"} padding={2}>-</Button><br />
                        <Button onClick={() => handleDelete(el.id)}  _hover={{bg:"#ff0000"}} bg={"white"} marginRight={5} marginLeft={10} borderRadius={10}>Remove</Button>
                        <Button  _hover={{bg:"white"}} bg={"white"} borderRadius={10}>Move To Wishlist</Button>
                      </Box>

                    </Flex>
                })
            }
        </Card>
        <Card boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} height={380} w={{base:700 ,md:700 , lg:350}} >
            <Button  onClick={() => navigate("/addresspage")} _hover={{bg:"#298E83"}} bg={"#298E83"} marginBottom={3} padding={2}>PLACE ORDER</Button>
            <Button marginBottom={3} _hover={{bg:"#FFB951"}} bg={"#FFB951"} padding={2}> Save an additional ₹ 149.52 on this order.</Button>
            <Input padding={2} onChange={(e) => setcoupoun(e.target.value)}  type={"text"} placeholder="enter coupoun code"/>
            <Button onClick={() => {
               coupoun!=="masai10" ? toast({
                title: ` Wrong Coupoun Apllied `,
                status: 'error',
                isClosable: true,
              }) :  <>
                 {  toast({
                title: `Coupoun Apllied Successfully`,
                status: 'success',
                isClosable: true,
              }) }
              {setdiscount(coupoun) 
                
              }
              </>}
                }  _hover={{bg:"#298E83"}} bg={"#298E83"} marginBottom={3} padding={2}>Apply</Button>
             <Text marginRight={"68%"}>Billing Details</Text>  
              {
                
                    <Card padding={3} display="flex" flexDirection={"column"} >
                  <Box display="flex" justifyContent={"space-between"}>
                    <Text>Cart Total</Text>
                    <Text>₹ {totalPrice}</Text>
                 </Box>
                 <Box  display="flex" justifyContent={"space-between"}>
                    <Text>GST</Text>
                    <Text>₹ {Gst}</Text>
                 </Box>
                 <Box  display="flex" justifyContent={"space-between"}>
                    <Text>Shipping Charge</Text>
                    <Text>₹ {0}</Text>
                 </Box>
                 <Box  display="flex" justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>Total Amount</Text>
                    <Text fontWeight={"bold"}>₹  {discount==="masai10" ?(finalPrice*90)/100 : finalPrice}</Text>
                    
                 </Box>
                  <Button onClick={handlePlaceorder} marginTop={10} _hover={{bg:"#298E83"}} bg={"#298E83"} marginBottom={3}>PLACE ORDER</Button>
               </Card> 
                
              }

        </Card>

    </Box>
    
  );
}

export default CartPage;
