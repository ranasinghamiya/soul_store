import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminLogin() {
const [Username , setusername] = useState("")
const [password , setpassword] = useState("")
const navigate = useNavigate()

const getadmindata = (obj)=>{
  return axios({
    method:"get",
    url:`https://mock-server-json-x067.onrender.com/admin`,
    params:{
      _username:obj.username,
      _password:obj.password
    }
  }).then((res) => {
    const user = res.data.find(el => el.username ===Username && el.password===password)
   if(user){
     alert("Admin Login Successfull")
     navigate('/admin')
   }
   else{
    alert("Wrong credentials")
   }
  })
}

const handleSubmit = ()=>{
const obj = {
  username:Username,password:password
}
getadmindata(obj)
}

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
        
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
         Admin Login
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="your-username"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={Username}
            onChange={(e) => setusername(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" 
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
             onClick={handleSubmit}
            >
            Submit
          </Button>
          {/* <Link to={"/admin"}>Admin Page</Link> */}
        </Stack>
      </Stack>
    </Flex>
  );
}