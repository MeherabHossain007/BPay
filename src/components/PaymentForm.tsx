import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Flex,
    Stack,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'
import RadioCard from './RadioCard'

  function PaymentForm({children}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
        <Button onClick={onOpen}>Pay Now</Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Make Payment</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Electricity Bill Id</FormLabel>
                <Input ref={initialRef} placeholder='Bill Id' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Bill No.</FormLabel>
                <Input placeholder='Bill No.' />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input placeholder='Amount'/>
              </FormControl>
              <Stack marginTop={5}>
                 <RadioCard/> 
              </Stack>
            </ModalBody>
            <ModalFooter>
              {children}
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default PaymentForm
