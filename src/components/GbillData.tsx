import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import PaymentForm from "./paymentForm";
import axios from "axios";
import PrintFrom from "./PrintFrom";

const GbillData = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:80/gbill/")
      .then((res) => res.json())
      .then((result) => {
        setItem(result);
      });
  }, []);

  return (
    <Table 
    variant="simple">
      <TableCaption></TableCaption>
      <Thead>
        <Tr>
          <Th>Gas Bill Id</Th>
          <Th>Zone</Th>
          <Th>Appliance Type</Th>
          <Th>Amount</Th>
          <Th>Date</Th>
          <Th>Payment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {item.map((item) =>
          item.u_id == window.name ? (
            <Tr>
              <Td>{item.g_id}</Td>
              <Td>{item.Zone}</Td>
              <Td>{item.Appliance_Type}</Td>
              <Td>{item.Amount}</Td>
              <Td>{item.Date}</Td>
              <Td>{item.pay_info}</Td>
              <Td>
                {item.pay_info === "Not Paid" ? (
                  <PaymentForm bId={item.g_id} bNo={item.Date} amount={item.Amount} billName={'GAS'}>
                    <Button
                      onClick={() => {
                        const paid = "Paid";
                        console.log(window.name);
                        let formData = new FormData();
                        formData.append("userName", window.name);
                        formData.append("paid", paid);
                        const url = "http://localhost:80/gbillUpdate/";
                        axios
                          .post(url, formData)
                          .then((res) => console.log(res.data))
                          .catch((err) => console.log(err));

                          window.location.reload();
                      }}
                      colorScheme="blue"
                      mr={3}
                    >
                      Pay
                    </Button>
                  </PaymentForm>
                ) : (
                  <PrintFrom name={window.name} e_id={item.g_id} billNo={item.Bill_No} date_NO={item.Date} amount_NO={item.Amount} billName= 'Gas Bill'/>
                )}
              </Td>
            </Tr>
          ) : (
            ""
          )
        )}
      </Tbody>
    </Table>
  );
};

export default GbillData;
