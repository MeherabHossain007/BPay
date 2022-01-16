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

const WbillData = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:80/wbill/")
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
          <Th>Water Bill Id</Th>
          <Th>Bill No.</Th>
          <Th>CP No.</Th>
          <Th>House Type</Th>
          <Th>Amount</Th>
          <Th>Date</Th>
          <Th>Payment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {item.map((item) =>
          item.u_id == window.name ? (
            <Tr>
              <Td>{item.w_id}</Td>
              <Td>{item.bill_no}</Td>
              <Td>{item.cp_no}</Td>
              <Td>{item.house_type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.bill_date}</Td>
              <Td>{item.pay_info}</Td>
              <Td>
                {item.pay_info === "Not Paid" ? (
                  <PaymentForm bId={item.e_id} bNo={item.bill_date} amount={item.amount} billName={'WATER'}>
                    <Button
                      onClick={() => {
                        const paid = "Paid";
                        console.log(window.name);
                        let formData = new FormData();
                        formData.append("userName", window.name);
                        formData.append("paid", paid);
                        const url = "http://localhost:80/wbillUpdate/";
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
                  <PrintFrom name={window.name} e_id={item.w_id} billNo={item.bill_No} date_NO={item.bill_date} amount_NO={item.amount} billName= 'Water Bill'/>
                )}
              </Td>
            </Tr>
          ) : (
            " "
          )
        )}
      </Tbody>
    </Table>
  );
};

export default WbillData;
