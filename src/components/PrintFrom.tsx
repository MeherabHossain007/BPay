import React, { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Flex,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
} from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";

function PrintFrom({ name, e_id, billNo, date_NO, amount_NO,billName }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Button onClick={onOpen}>Print</Button>
      
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div ref={componentRef}>
              <Box alignItems={"start"} alignContent={"start"} p={3}>
              <Flex
                flex={{ base: 1 }}
                justify={{ base: "center", md: "start" }}
                direction={"column"}
                spacing={4}
              >
                <Image
                  alt={"Logo"}
                  objectFit={"none"}
                  className="img-responsive"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/logo.png?alt=media&token=9b826346-add6-41f8-9d81-dcb3d64cf71f"
                  }
                />
                <Text
                  fontFamily={"Raleway"}
                  fontWeight={"extrabold"}
                  textAlign={"start"}
                  fontSize={"40px"}
                  color={"gray.500"}
                >
                  {billName}
                </Text>
                <Text
                  fontWeight={"extrabold"}
                  textAlign={"start"}
                  fontSize={"30px"}
                >
                  UserName: {name}
                </Text>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      <Th>{billName} Id</Th>
                      <Th>Bill No.</Th>
                      <Th>Date</Th>
                      <Th>Amount</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>{e_id}</Td>
                      <Td>{billNo}</Td>
                      <Td>{date_NO}</Td>
                      <Td>{amount_NO}</Td>
                    </Tr>
                  </Tbody>
                </Table>
                <Text
                  fontWeight={"extrabold"}
                  textAlign={"start"}
                  fontSize={"50px"}
                  color={"green.300"}
                >
                  Paid
                </Text>
              </Flex>
            </Box>
            </div>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={3}>
            <Button onClick={handlePrint}>Print</Button>
            <Button onClick={onClose}>Close</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PrintFrom;
