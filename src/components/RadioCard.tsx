import React from "react";
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  useRadio,
  useRadioGroup,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";

export class Modal extends React.Component {
  constructor(props) {
    super(props)

  }}

function Card(props): JSX.Element {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      as="label"
      {...checkbox}
      cursor="pointer"
      borderRadius="md"
      boxShadow="md"
      w="100%"
      _checked={{
        bg: "blue.400",
        color: "white",
      }}
      _focus={{
        boxShadow: "outline",
      }}
      px={5}
      py={3}
    >
      {props.children}
      <input {...input} />
    </Box>
  );
}
function RadioCard() {
  const value = [
    {options: "Credit/Debit Card", image: "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Visa-Logo.png?alt=media&token=2ae3162a-bb98-43c6-81bc-39ce75145770",},
    {options: "Master Card", image: "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Mastercard-Logo.png?alt=media&token=01ae025b-8ba2-4c3c-b7f6-afbbf304b513",},
    {options: "Bkash", image: "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/BKash-bKash-Logo.wine.png?alt=media&token=9f4c7cd0-4dd4-4d93-b575-b8d37af1b77c",},
    {options: "Nagad", image: "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Nagad-Logo.wine.png?alt=media&token=5943780d-8b7e-4ed3-b452-720c2fe8161a",},
  ]
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "Payment",
    defaultValue: "Credit/Debit Card",
  });

  const group = getRootProps();

  return (
    <VStack {...group}>
      {value.map((value) => {
        const radio = getRadioProps({value:value.options});
        return (
          <Card {...radio} image={value.image}>
            <Image alt={"Logo"}  boxSize='50px' objectFit='contain' className="img-responsive" src={value.image} />
            {value.options}
          </Card>
        );
      })}
    </VStack>
  );
}

export default RadioCard;
