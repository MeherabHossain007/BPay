import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import RadioCard from "./RadioCard";

const Card = ({ label, text }) => {
  return (
    <>
      <Text fontSize="15px" fontFamily={"Raleway"}>
        {label}
        <Text fontSize="30px" fontWeight={700}>
        {text}
      </Text>
      </Text>
    </>
  );
};

function PaymentForm({ children, bId, bNo, amount, billName }) {
  const name = billName + ' BILL ID'
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Pay Now</Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Make Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Card label={name} text={bId} />
            <Card label={"DATE"} text={bNo} />
            <Card label={'AMOUNT'} text={amount} />
            <Stack marginTop={5}>
              <RadioCard />
            </Stack>
          </ModalBody>
          <ModalFooter>
            {children}
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PaymentForm;
