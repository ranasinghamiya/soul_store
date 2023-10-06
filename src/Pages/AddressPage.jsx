import React, { useContext, useEffect, useState } from 'react';
import {
   
    Button,
    Box,
    Card,
    Text,
    Stack,
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
    PinInput,
    PinInputField,
    useToast,
  } from '@chakra-ui/react'
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { AuthContext } from '../ContextApi/AuthContextProvider';
import axios from 'axios';
import PaymentPage from './PaymentPage';
import { DeletecartItem, handleEmptycart } from '../Api/Api';
const AddressPage = () => {
   
    const { adresstotal,addressGst  } = useContext(AuthContext)
    const [OTP , setOTP] = useState()
    const [pin, setPin] = useState("");
    const [success , setsuccess] = useState(false)
    const toast = useToast()
    const[submitdisbale , setsubitdisable] = useState(false)
    const [final , setfinal] = useState(false)

    const handleMyOtp = ()=> {
        
         setOTP(Math.floor(Math.random() * 9000) + 1000)
          {
             toast({
                title: `Your OTP Send Successfully`,
                status: "success",
                isClosable: true,
              })
          }
         
    }
  
    const handleChangepin= (value) => {
        setPin(value);
        // You can do whatever you need to do with the PIN input here
       
      };
      const MathchOtp = ()=>{
        
        if(pin==OTP){
            setsuccess(true)
            
        }
      }

      const HandlePlaceorder = ()=>{
        setfinal(true)
        DeletecartItem()
      }
      console.log(OTP)

    // const EmptyCart = ()=>{
      
    // }
 


  return (
    <Box marginTop="150px" display={"flex"}  flexDirection={{base:"column" ,md:"column" , lg:"row"}} justifyContent={"center"} gap={20}>
      <Box
        
        w={{base:700 ,md:700 , lg:350}}
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>  
        <Tabs>
  <TabList>
    <Tab>Address</Tab>
    <Tab>Payment</Tab>
    <Tab>Submit OPT</Tab>
   
  </TabList>

  <TabPanels>
    <TabPanel>
         <form >
            <FormControl id="email">
              <FormLabel>First Name</FormLabel>
              <Input type={"text"} placeholder="enter first name"/>
              <FormLabel>Last Name</FormLabel>
              <Input type={"text"} placeholder="enter last name"/>
              <FormLabel>Email address</FormLabel>
              <Input type="email"  placeholder='enter your mail'/>
              <FormLabel>Conatct Number</FormLabel>
              <Input type="number"  placeholder='enter your contact'/>
             
              
            </FormControl>
            
            </form>
    </TabPanel>
    <TabPanel>
    <FormLabel>Card Number</FormLabel>
      <Input type={"number"} placeholder="enter you card number"/>
      <FormLabel>CVV</FormLabel>
      <Input type={"texr"} placeholder="enter you card number"/>
    
      <Button marginTop={10} _hover={{bg:"#298E83"}} bg={"#298E83"} onClick={handleMyOtp} >Send OTP</Button>
       
   
    </TabPanel>
    <TabPanel>
        <Button  _hover={{bg:"#298E83"}} bg={"#298E83"} onClick={() => {

          
           if(OTP==undefined){
            alert("Plase Send OTP First")
           }
           else{
            alert(OTP)
            setsubitdisable(true)
           }

        }}>Get OTP</Button>
    <FormLabel>Submit OTP</FormLabel>
    <PinInput
        type="number"
        onChange={handleChangepin}
        value={pin}
        isInvalid={pin.length < 4}
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <Button isDisabled={submitdisbale===false} marginTop={10} _hover={{bg:"#298E83"}} bg={"#298E83"} onClick={MathchOtp}>Submit OTP</Button>
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
         
     
     <Box height={380} w={{base:700 ,md:700 , lg:350}}>
     <Text marginRight={"68%"} fontWeight="bold">Billing Details</Text>  
    <Card padding={3} display="flex" flexDirection={"column"} >
                  <Box display="flex" justifyContent={"space-between"}>
                    <Text>Cart Total</Text>
                    <Text>₹ {adresstotal}</Text>
                 </Box>
                 <Box  display="flex" justifyContent={"space-between"}>
                    <Text>GST</Text>
                    <Text>₹ {addressGst}</Text>
                 </Box>
                 <Box  display="flex" justifyContent={"space-between"}>
                    <Text>Shipping Charge</Text>
                    <Text>₹ {0}</Text>
                 </Box>
                 <Box  display="flex" justifyContent={"space-between"}>
                    <Text fontWeight={"bold"}>Total Amount</Text>
                    <Text fontWeight={"bold"}>₹  {(adresstotal*90)/100 }</Text>
                    
                 </Box>
                  <Button isDisabled ={success===false} marginTop={10} _hover={{bg:"#298E83"}} bg={"#298E83"} marginBottom={3} 
                   onClick={HandlePlaceorder}

                  >PLACE ORDER</Button>
               </Card> 

               {
                 final ? <PaymentPage/> :null
               }
     </Box>

  </Box>
  );
}

export default AddressPage;