import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
const EbillData = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:80/ebill/")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
      });
  }, []);
  return (
    <Table variant="simple">
      <TableCaption></TableCaption>
      <Thead>
        <Tr>
          <Th>Electricity Bill Id</Th>
          <Th>Bill No.</Th>
          <Th>Meter No.</Th>
          <Th>Consume Unit</Th>
          <Th>Payment</Th> 
        </Tr>
      </Thead>
      <Tbody>
        {
            item.map((item) =>(
                <Tr>
                    <Td>{item.e_id}</Td>
                    <Td>{item.Bill_NO}</Td>
                    <Td>{item.Meter_NO}</Td>
                    <Td>{item.con_unit}</Td>
                    <Td>{item.pay_info}</Td>
                </Tr>
            ))
        }
      </Tbody>
    </Table>
  );
};

export default EbillData;
