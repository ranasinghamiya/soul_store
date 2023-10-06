import { Box, Center, Flex ,FormControl,FormLabel, Select, Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import {  Button, Card, CardBody,  Heading, Image, Input,  Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { HandleGEtOrder } from '../Api/Api';
import { useToast } from '@chakra-ui/react'
import axios from 'axios';
import Loader from '../Components/Loader';

const initialdata = {
    image:"",
    title:"",
    category:"",
    price:"",
    
  
   }

   const initialdata1 = {
    image:"",
    title:"",
    category:"",
    price:"",
    id:null
  
   }
const AdminPage = () => {
const[formdata , setformdata] = useState(initialdata)
const[formdata1 , setformdata1] = useState(initialdata1)
const [orderData , setorderData] = useState([])
const [ordertotal , setordertotal] = useState(1*Math.floor(Math.random() * 9000) + 1000)
const [Selected , setSelect] = useState("")
const [data , setdata] = useState([])
const[page , setpage] = useState(1)
const [totalPage , settotalPage] = useState(1)
 let lastPage = totalPage/7
const toast = useToast()
const [recent , setrecent] = useState(false)
const [recentupdate , setrecentupdate] = useState([])
const [loading , setloading] = useState(false)
const [orderinfo , setorderinfo] = useState(false)
const [Accinfo , setAccinfo] = useState(false)
const [profitinfo , setprofitinfo] = useState(false)

useEffect(()=>{
    FetchCartItem()
},[])

  const FetchCartItem = ()=>{
    HandleGEtOrder()
    .then((res) => setorderData(res.data))
  }
     

  const handleAccept =(id , price ,count)=>{
 let acceptdata = orderData.filter(el=> el.id!==id)
 setorderData(acceptdata)
 setordertotal(ordertotal - price*count)
 {
    toast({
        title: 'Admin',
        description: "Order Accepted Successfully.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
 }
  }
  const handleAccept1 =(id , price ,count)=>{
    let acceptdata = orderData.filter(el=> el.id!==id)
    setorderData(acceptdata)
    setordertotal(ordertotal - price*count)
    {
       toast({
           title: 'Admin',
           description: "Order Rejected Successfully.",
           status: 'error',
           duration: 9000,
           isClosable: true,
         })
    }
     }

////////-----------------------------get order by using seletc option--------------------------------------------------------

 
const getProducts = ()=>{
   setloading(true)
    return axios({
        method:"get",
        url:`https://mock-server-json-x067.onrender.com/${Selected}`,
        params:{
            _page:page,
            _limit:7,
            _sort:"id",
            _order:'desc'
        }
    })
    .then((res) => {
        settotalPage(res.headers.get('x-total-count'))
        setdata(res.data)
        setloading(false)
    })
}
  

useEffect(()=>{
    if(Selected){
        getProducts()
    }
},[Selected,page])


//-----------------------------------delete product--------------------------------------------------------

 const deleteProduct=(id)=>{
    return axios({
        method:"delete",
        url:`https://mock-server-json-x067.onrender.com/${Selected}/${id}`
    }).then((res) => {
        console.log(res)
        getProducts()
    })
 }

 //---------------------------------post request using seletc option-------------------------------------
 const handleChange = (e)=>{
    // console.log(e.target.value)
    setformdata({
      ...formdata,
      [e.target.name] : e.target.type==="number"? Number(e.target.value) : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    handlePostrequest(formdata)
    // setformdata(initialdata)
    setrecent(true)
 }
 

 const handlePostrequest = (data)=>{
    return axios({
       method:"post",
       url:`https://mock-server-json-x067.onrender.com/${Selected}`,
       data:data
    }).then(() => getProducts())
 }


//-----------------------------------------update data--------------------------------------
 const handleEdit = (item) =>{
    // console.log(item)
     setformdata1(item)
 } 

// console.log(formdata1)
const handleupdatechange = (e)=>{
    setformdata1({
        ...formdata1,
        [e.target.name] : e.target.type==="number"? Number(e.target.value) : e.target.value
      })
}

const handleSubitupdatereq = (e)=>{
    e.preventDefault()
    updateProduct(formdata1)
}

 const updateProduct = (obj)=>{
    const{id,title,price,category,image} = obj
    return axios({
        method:"patch",
        url:`https://mock-server-json-x067.onrender.com/${Selected}/${id}`,
        data:{
            title,
            price,
            category,
            image,
        }
    }).then((res) =>{
        setrecentupdate(res.data)
        getProducts()
    })
 }

// console.log(recentupdate)





  return (
    <div style={{marginTop:"150px"}}>
      
          
          <Box  height={"300px"} w={"95%"} margin="auto" marginTop={20}  >
          <Heading>Welcome To Admin's Portal</Heading>
              <Box height={"200px"}  marginTop={10}>
                  <Flex justifyContent={"space-evenly"}>
                 
                     <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} height={"200px"} width={"30%"} border="1px solid blue" bg={"#060047"} color="white">
                       <Text fontWeight={"bold"} fontSize="3xl">Total User Information</Text>
                          <Flex  marginTop={5} justifyContent={"space-evenly"}>
                            <Text fontWeight={"semibold"}>Total Users</Text><Text>12000</Text>
                            
                          
                          </Flex>
                          <Flex justifyContent={"space-evenly"} marginTop={5}>
                          <Text fontWeight={"semibold"}>Active Users</Text><Text>{Math.floor(Math.random() * 90) + 100}</Text>
                            
                          
                          </Flex>
                          
                          
                     </Box>
                     <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} bg={"#060047"} color="white" height={"200px"} width={"30%"} border="1px solid blue">
                     <Text fontWeight={"bold"} fontSize="3xl">Total Order Information</Text>
                          <Flex marginTop={5} justifyContent={"space-evenly"}>
                            <Text fontWeight={"semibold"}>Total Orders</Text><Text>5000</Text>
                            
                          
                          </Flex>
                          <Flex justifyContent={"space-evenly"} marginTop={5}>
                          <Text fontWeight={"semibold"}>Order Delivered</Text><Text>{Math.floor(Math.random() * 1000) + 1000}</Text>
                            
                          
                          </Flex>

                     </Box>
                     <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"} bg={"#060047"} color="white"  height={"200px"} width={"30%"} border="1px solid blue">
                     <Text fontWeight={"bold"} fontSize="3xl">Total Revenue Information</Text>
                          <Flex marginTop={5} justifyContent={"space-evenly"}>
                            <Text fontWeight={"semibold"}>Total Revenue</Text><Text>780000</Text>
                            
                          
                          </Flex>
                          <Flex justifyContent={"space-evenly"} marginTop={5}>
                          <Text fontWeight={"semibold"}>Profit</Text><Text>{Math.floor(Math.random() * 90000) + 10000}</Text>
                            
                          
                          </Flex>

                     </Box>
                  </Flex>
              </Box>
          </Box>


      <Box  height={"auto"} w={"95%"} margin="auto" marginTop={20} >

         <Flex justifyContent={"space-between"}>
         <Box  height={"100%"}  margin="auto" w={"100%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}>
         <Tabs  isFitted variant="enclosed-colored"  >
                <TabList mb='2em' color={"white"} >
                    <Tab  bg={"#FF0000"} >Manage Orders</Tab>
                    <Tab bg={"#FF0000"}>Manage Products</Tab>
                    <Tab bg={"#FF0000"}>Add Products</Tab>
                    <Tab bg={"#FF0000"}>Update Product</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                     <Table >
                        <Thead>
                            <Th>Order No</Th>
                            <Th>Title</Th>
                            <Th>Price</Th>
                            <Th>Image</Th>
                            <Th>Quantity</Th>
                            
                        </Thead>
                        <Tbody>
                           {
                            orderData && orderData.map((el) => (
                                <Tr>
                                    <Td>{el.id + Math.floor(Math.random() * 9000) + 1000}</Td>
                                    <Td>{el.title}</Td>
                                    <Td>₹ {el.price}</Td>
                                    <Td><Image src={el.image} alt={el.title} w={10}/></Td>
                                    <Td>{el.count}</Td>
                                    <Td><Button color={"white"} bg={"green"} _hover={"green"} onClick={() =>handleAccept(el.id , el.price,el.count)}>Accept</Button></Td>
                                    <Td><Button color={"white"} bg={"red"} _hover={"red"} onClick={() =>handleAccept1(el.id , el.price,el.count)}>Reject</Button></Td>
                                    
                                </Tr>
                            ))
                           }
                           <Tr><span><Text>{`Total Sell      ${ordertotal}`}</Text></span></Tr>
                        </Tbody>
                     </Table>
                     
                    </TabPanel>
                    <TabPanel>
                    <Select placeholder='Select option' value={Selected} onChange={(e) => setSelect(e.target.value)} >
                            <option value='mensProducts'>Mens Prodcuts</option>
                            <option value='womensProducts'>Womens Products</option>
                            <option value='kidsProducts'>Kids Products</option>
                    </Select>

                    <Table marginTop={10}>
                        <Thead>
                            <Th>Order No</Th>
                            <Th>Title</Th>
                            <Th>Price</Th>
                            <Th>Image</Th>
                            
                            
                        </Thead>
                        <Tbody>
                           { loading ? <Loader/> :
                            data && data.map((el) => (
                                <Tr>
                                    <Td>{el.id}</Td>
                                    <Td>{el.title}</Td>
                                    <Td>₹ {el.price}</Td>
                                    <Td><Image src={el.image} alt={el.title} w={10}/></Td>
                                    
                                    <Td><Button color={"white"} bg={"green"} _hover={"green"} onClick={() =>handleEdit(el)}>Edit </Button></Td>
                                    <Td><Button color={"white"} bg={"red"} _hover={"red"} onClick={() => deleteProduct(el.id)}>Delete</Button></Td>
                                    
                                </Tr>
                            ))
                           }
                           
                        </Tbody>
                     </Table>
                       <Button colorScheme='teal' variant='outline' isDisabled={page===1} onClick={() => setpage(1)} >First</Button>
                       <Button colorScheme='teal' variant='outline' isDisabled={page===1} onClick={() => setpage(page-1)}>Previous</Button>
                       <Button colorScheme='teal' variant='outline' isDisabled>{page}</Button>
                       <Button  colorScheme='teal' variant='outline' isDisabled={page===lastPage} onClick={() => setpage(page+1)}>Next</Button>
                       <Button colorScheme='teal' variant='outline' isDisabled={page===lastPage} onClick={() => setpage(lastPage)}>Last</Button>
                    </TabPanel>
                  <TabPanel>
                  <Flex justifyContent={"space-around"}>
                  <Select placeholder='Select option' value={Selected} onChange={(e) => setSelect(e.target.value)} >
                            <option value='mensProducts'>Mens Prodcuts</option>
                            <option value='womensProducts'>Womens Products</option>
                            <option value='kidsProducts'>Kids Products</option>
                    </Select>
                   <Center marginLeft={150} marginRight={150}>
                   

                   <Card  boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"}>
              <CardBody bg={"yellow"}>
                
            <form  onSubmit={handleSubmit} style={{border:"3px solid black" , padding:"10px" , backgroundColor:"white"} } >
            <FormControl w="330px" >
          <Text fontSize='4xl' marginTop="40px" >Add Product</Text>
             
              <FormLabel>Product name</FormLabel>
              <Input type='text'  placeholder='enter title' border="1px solid black"
               name='title'
               onChange={handleChange}
              />
              <FormLabel>Price</FormLabel>
              <Input type='text'  placeholder='enter price' border="1px solid black"
                name='price'
                onChange={handleChange}
              />
              <FormLabel>Category</FormLabel>
              <Input type='text'  placeholder='enter category' border="1px solid black"
                 name='category'
                 onChange={handleChange}
              />
              
              <FormLabel>Image URL</FormLabel>
              <Input type='text'  placeholder='enter image url' border="1px solid black"
               name='image'
               onChange={handleChange}
              />
              <Input type="submit" value="Add Product" bg="black" color="white"/>
           </FormControl>
            </form>
            </CardBody>
          </Card>
                   </Center>

                   <Box>
                   <Heading>Recently Added Item</Heading>
                       {recent ? <Card>
                       
                         <Image src={formdata.image} alt={formdata.title} />
                         <Text fontWeight={"bold"}>Title :{formdata.title}</Text>
                         <Text fontWeight={"bold"}>Price :{formdata.price}</Text>
                         <Text fontWeight={"bold"}>Category :{formdata.category}</Text>
                       </Card>
                         : null}
                   </Box>

                  </Flex>
                  </TabPanel>
                         
                     
                     
                     <TabPanel>
                          
                         <Flex display={"flex"} justifyContent={"space-around"}>
                         <Card  marginRight={150} maxW={"fit-content"} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"}>
              <CardBody bg={"yellow"}>
                
            <form  onSubmit={handleSubitupdatereq}  style={{border:"3px solid black" , padding:"10px" , backgroundColor:"white"} } >
            <FormControl w="330px" >
          <Text fontSize='4xl' marginTop="40px" >Update Product</Text>
          <FormLabel>Product ID</FormLabel>
              <Input  type='number'  placeholder='enter id' border="1px solid black"
               value={formdata1.id}
              name='id'
               onChange={handleupdatechange}
              />
              <FormLabel>Product name</FormLabel>
              <Input type='text'  placeholder='enter title' border="1px solid black"
              value={formdata1.title}
               name='title'
               onChange={handleupdatechange}
              />
              <FormLabel>Price</FormLabel>
              <Input type='text'  placeholder='enter price' border="1px solid black"
                value={formdata1.price}
               name='price'
                onChange={handleupdatechange}
              />
              <FormLabel>Category</FormLabel>
              <Input type='text'  placeholder='enter category' border="1px solid black"
                 value={formdata1.category}
                name='category'
                 onChange={handleupdatechange}
              />
              
              <FormLabel>Image URL</FormLabel>
              <Input type='text'  placeholder='enter image url' border="1px solid black"
               value={formdata1.image}
              name='image'
               onChange={handleupdatechange}
              />
              <Input type="submit" value="Update Product" bg="black" color="white"/>
           </FormControl>
            </form>
            </CardBody>
          </Card>
                     <Box>
                             <Heading>Recently Updated Product</Heading>
                        {
                               recentupdate ?
                                <Card p={10}>
                       
                                <Image marginLeft={"80px"} w={"200px"} src={recentupdate.image} alt={recentupdate.title} />
                                <Text fontWeight={"bold"}>Title :{recentupdate.title}</Text>
                                <Text fontWeight={"bold"}>Price :{recentupdate.price}</Text>
                                <Text fontWeight={"bold"}>Category :{recentupdate.category}</Text>
                              </Card>
                            
                       :null }
                     </Box>
                         </Flex>
                      
                     </TabPanel>


                </TabPanels>
         </Tabs>
         </Box>  
                  
    </Flex>

      </Box>
    </div>
  );
}

export default AdminPage;