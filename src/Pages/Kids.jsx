import { Box, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from "framer-motion"

import topsellkids1 from "../images/topsellkids1.webp"
import topsellkids2 from "../images/topsellkids2.webp"
import topsellkids3 from "../images/topsellkids3.webp"
import topsellkids4 from "../images/topsellkids3.webp"

import kidcollection1 from "../images/kidscollection1.webp"
import kidcollection2 from "../images/kidscollection3.webp"
import kidcollection3 from "../images/kidscollection3.webp"

import KidsCrousel from '../Components/KidsCrousel';
import { Link } from 'react-router-dom';
const Kids = () => {
  return (
    <div style={{marginTop:"80px"}} >
         <div className='crousel' >
            <KidsCrousel/>

            <div className='collectionmens' style={{marginTop:"30px"}}>
             <Box>
                 <Text fontWeight={"bold"} fontSize="4xl">COLLECTIONS</Text>
               <Grid w={"97%"} gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)" , lg:"repeat(3,1fr)"}} gap="30px" margin={"auto"} marginTop={10}>
                  <Link to={"/kidsproducts"}><Image src={kidcollection1} alt="collection1"/></Link>
                  <Image src={kidcollection2} alt="collection2"/>
                  <Image src={kidcollection3} alt="collection3"/>
               </Grid>

             </Box>

            </div>
           
        </div>



         <div className='OFFICIAL MERCHANDISE' style={{marginTop:"30px"}}>
         <Text fontWeight={"bold"} fontSize="4xl">OFFICIAL MERCHANDISE</Text>
             
             <Grid gridTemplateColumns={{base:"repeat(2,1fr)", md:"repeat(3,1fr)" , lg:"repeat(5,1fr)"}} gap={30} width="92%" margin="auto" marginTop={5}>
                 <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/web-icon.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                
                <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Marvel_Logo_268x220_b16y8nC_GKd3vRA.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                
                <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/HarryPotter_Logo_268x220_LqBAKZU_Y8BG6uT.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                
                <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/Disnety_Logo_268x220_GevoL2M_2j5PP2v.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>
                 
                 <motion.Box
                   whileHover={{ scale: 1.01 }}
                   whileTap={{ scale: 0.9 }}
                   transition={{ type: "spring", stiffness: 100, damping: 10 }}
                 ><Image src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/Merchandies-images/DC_Logo_268x220_qtYfouo_VyuqmVD.jpg?format=webp&w=300&dpr=1.3' alt='marvel'/></motion.Box>

             </Grid>

         </div>
               <div className='topselling' style={{marginTop:"30px"}}>
               <Text fontWeight={"bold"} fontSize="4xl">TOP SELLING</Text>
                 <Grid gridTemplateColumns={{base:"repeat(2,1fr)", md:"repeat(2,1fr)" , lg:"repeat(4,1fr)"}} gap={30} w={"95%"} margin="auto" marginTop={7}>
                  <Image src={topsellkids1} alt="topsell1"/>
                  <Image src={topsellkids2} alt="topsell"/>
                  <Image src={topsellkids3} alt="topsell"/>
                  <Image src={topsellkids4} alt="topsell"/>
                  
                 </Grid>
               </div>


              
    </div>
  );
          }
export default Kids;
