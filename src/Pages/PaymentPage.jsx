import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
 Button,
    useDisclosure,
  } from '@chakra-ui/react'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import axios from 'axios';
  import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../ContextApi/AuthContextProvider';
  
  const PaymentPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate()
    useEffect(()=>{
         onOpen()
    },[])

    const handleClose = ()=>{
       
       onClose()
        navigate('/')
    }

    return (
      <div>
              <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thanks For Your Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
             
<Alert
                        status='success'
                        variant='subtle'
                        flexDirection='column'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        height='200px'
                        position={"relative"}
                        >
                        <AlertIcon boxSize='40px' mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                            OrderSuccessfull!
                        </AlertTitle>
                        <AlertDescription maxWidth='sm'>
                            Thanks for Purchasing. Order Detail Has Been Sended On Your Mail.
                        </AlertDescription>
</Alert>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    );
  }
  
  export default PaymentPage;
  