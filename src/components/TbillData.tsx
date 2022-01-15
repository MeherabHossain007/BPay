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

const TbillData = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("http://localhost:80/tbill/")
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
          <Th>Internet Bill Id</Th>
          <Th>Bill No.</Th>
          <Th>Connection Type</Th>
          <Th>Amount</Th>
          <Th>Date</Th>
          <Th>Payment</Th>
        </Tr>
      </Thead>
      <Tbody>
        {item.map((item) =>
          item.u_id == window.name ? (
            <Tr>
              <Td>{item.i_id}</Td>
              <Td>{item.bill_no}</Td>
              <Td>{item.connection_type}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.amount}</Td>
              <Td>{item.bill_date}</Td>
              <Td>{item.pay_info}</Td>
              <Td>
                {item.pay_info === "Not Paid" ? (
                  <PaymentForm bId={item.e_id} bNo={item.Bill_No} amount={item.amount} billName={'INTERNET'}>
                    <Button
                      onClick={() => {
                        const paid = "Paid";
                        console.log(window.name);
                        let formData = new FormData();
                        formData.append("userName", window.name);
                        formData.append("paid", paid);
                        const url = "http://localhost:80/tbillUpdate/";
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
                  <PrintFrom name={window.name} e_id={item.e_id} billNo={item.Bill_No} Meter_NO={item.Meter_NO} Con_NO={item.con_unit} billName= 'Electricity Bill'/>
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

export default TbillData;
