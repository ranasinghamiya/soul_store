import {
  Box,

  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,

  List,
  ListItem,

} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { MdLocalShipping } from 'react-icons/md';
import {  useParams } from 'react-router-dom';
import { getdataforproddetails } from '../Api/Api';

export default function MensSingalPage() {
  let params = useParams();
  const[data , setdata] = useState({})

  const fetchdata = (id)=>{
    getdataforproddetails(id)
    .then((res)=>{
     setdata(res.data)
    })
  }
 useEffect(()=>{
  fetchdata(params.id)
 },[params.id])
 console.log(data)
  return (
        
     
    <Container maxW={'7xl'} marginTop="120px">
    <SimpleGrid
      columns={{ base: 1, lg: 2 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 18, md: 24 }}>
      <Flex>
        <Image
          rounded={'md'}
          alt={'product image'}
          src={
            data.image
          }
          fit={'cover'}
          align={'center'}
          w={'100%'}
          h={{ base: '100%', sm: '400px', lg: '700px' }}
        />
      </Flex>
      <Stack spacing={{ base: 6, md: 10 }}>
        <Box as={'header'}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
           {data.title}
          </Heading>
          <Text>{data.category}</Text>
          <Text
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}>
            ₹ {data.price}
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={'column'}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }>
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
              color={useColorModeValue('gray.500', 'gray.400')}
              fontSize={'2xl'}
              fontWeight={'300'}>
             {data.description}
            </Text>
            <Text fontSize={'lg'}>
            
            Official Licensed Mon Knight Oversized T-Shirt.

Buy the quirky Moon Knight merchandise online in India, available exclusively at The Souled Store
            </Text>
          </VStack>
          <Box>
            <Text
              fontSize={{ base: '16px', lg: '18px' }}
              color={useColorModeValue('yellow.500', 'yellow.300')}
              fontWeight={'500'}
              textTransform={'uppercase'}
              mb={'4'}>
             More Details
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <List spacing={2}>
                <ListItem>Available</ListItem>
                <ListItem>Brand Description</ListItem>
                
              </List>
              <List spacing={2}>
                <ListItem>All Rupees Store</ListItem>
                <ListItem>Material & Care:
Premium Heavy Gauge Fabric
80% Cotton 20% Polyester 
Machine Wash

Country of Origin: India (and proud)

Manufactured & Sold By:
The Souled Store Pvt. Ltd.
224, Tantia Jogani Industrial Premises
J.R. Boricha Marg
Lower Parel (E)
Mumbai - 11
connect@thesouledstore.com</ListItem>
                
              </List>
            </SimpleGrid>
          </Box>
        
        </Stack>

        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('gray.900', 'gray.50')}
          color={useColorModeValue('white', 'gray.900')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'lg',
          }}>
          Add to cart
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={'center'}>
          <MdLocalShipping />
          <Text>2-3 business days delivery</Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  </Container>
  );
}