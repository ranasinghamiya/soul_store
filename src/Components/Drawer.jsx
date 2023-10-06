import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Divider,
    Input,
  } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../ContextApi/AuthContextProvider'
export default function DrawerEx({setorderby}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {setquery} = useContext(AuthContext)
  
    return (
      <>
        <Button ref={btnRef} colorScheme='red' onClick={onOpen}>
         Filter
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filter Products</DrawerHeader>
  
            <DrawerBody>
            <Button display='flex'
                        alignItems='center'
                        justifyContent='center'
                        width='100%'
     colorScheme='red' marginBottom={8}
      onClick={() => setorderby("asc")}
      
     >Sort By Ascending </Button>
           
           
            <Button 
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            colorScheme='red'  marginBottom={8}
            onClick={() => setorderby("desc")}
            >Sort By Descending </Button>
             <Button 
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            colorScheme='red'  marginBottom={8}
            onClick={() => setorderby("")}
            >Reset</Button>


         <Divider variant="solid" orientation='horizontal' colorScheme={"red"} size="20px"/>

            <Input type={"text"} placeholder='search product'  onChange={(e) => setquery(e.target.value)}/>
            </DrawerBody>
              
          
           
            
    

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }