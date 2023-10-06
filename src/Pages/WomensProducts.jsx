import React, { useContext, useEffect, useState } from 'react';
import { Cartdata, Cartdataget, GetWomensProducts } from '../Api/Api';
import WomensCarousel from '../Components/WomensCrousel';
import { Box,  Card, Grid, Image, Text, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink,  Flex, Button } from '@chakra-ui/react';
import Loader from '../Components/Loader';
import DrawerEx from '../Components/Drawer';
import { AuthContext } from '../ContextApi/AuthContextProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
const WomensProducts = () => {
    const [womensdata , setwomensdata] = useState([])
    const [loading , setloading] = useState(false)
    const [orderby , setorderby] = useState("")
    const {query,cartData , setcartData,arr} = useContext(AuthContext)
    const [cartItems , setCartItems] = useState([])
    // console.log(query)
     setcartData(cartItems)
console.log(cartData);

  useEffect(()=>{
    FetchWomensData(orderby,query)
  },[orderby,query])
     
 const FetchWomensData = (orderby,query)=>{
   setloading(true)
    GetWomensProducts(orderby,query)
    .then((res) =>{
      setloading(false)
        setwomensdata(res.data)
    })
 } 

 const handleCart = (id,item)=>{
 arr.push(item)
  const newCartValue = { ...item };
   newCartValue.count = 1;
   Cartdata(newCartValue)
    Cartdataget().then((res) =>{
       res.data.map((ele) => {
         if(ele.id ===id){
        
           ele.count += 1;
          return  axios.patch(`https://mock-server-json-x067.onrender.com/cart/${id}`, ele)
            
          
          // If count key doesn't exist, create count key with value 1
          
         }
         else{
          console.log("come form else")
          newCartValue.count = 1;
          Cartdata(newCartValue)
         }
         
       })
    })


  

  let itemExists = false;
  const updatedCartItems = cartItems.map(cartItem => {
      if (cartItem.id === item.id) {
          itemExists = true;
          return { ...cartItem, count: cartItem.count + 1 };
      }
      
      return cartItem;
  });

  if (!itemExists) {
      setCartItems([...updatedCartItems, { ...item, count: 1 }]);
  } else {
      setCartItems(updatedCartItems);
  }
  // console.log(item, "from handle cart")
  // setdata([...data , item])
  // console.log(data)
  

 }


   return (
    <div>
     <WomensCarousel/>

     <div marginTop={20}>
       <Breadcrumb marginTop={20} marginLeft={20}>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='/womens'>Womens</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Womens Products</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
       
       </div>
      
       <Flex className='filter' justify={"start"} marginLeft="75px" marginTop={5}>
              <DrawerEx  setorderby={setorderby} />
           </Flex>

     <Box marginTop={20}>
       {loading ? <Loader/> : <Grid gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)"}} gap="30px">
            {
                womensdata && womensdata.map((el)=>(
                    <Card key={el.id} padding="15px" alignItems={"center"}>
                        <Link to={`/womensproducts/${el.id}`}><Image marginLeft={{base:"60px"}} src={el.image} alt={el.title} w="70%" /></Link>
                        <Text fontWeight={"bold"}>{el.title}</Text>
                        <Text >{el.category}</Text>
                        <Text fontWeight={"bold"}> ₹ {el.price}</Text>
                        <Button  onClick={() => handleCart(el.id, el)}  _hover={{bg:"#FF0000"}} bg={"#FF0000"} color="white">Add To Cart</Button>
                    </Card>
                ))
            }
        </Grid>}
       </Box>

    </div>
  );
}

export default WomensProducts;