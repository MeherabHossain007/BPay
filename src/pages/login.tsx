import React, { Component, useEffect, useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useBoolean,
} from "@chakra-ui/react";


class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleAdd = async e => {
    await this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  } 
  
  render(){
    const [verify, setVerify] = useState([]);
useEffect(() => {
  fetch("http://localhost:80/api/")
    .then((res) => res.json())
    .then((result) => {
      setVerify(result);
    });
}, []);
    const [login, setLogin] = useBoolean();
    const verifyLogin = () => {
      verify.map(verify=>(
        verify.u_id == this.state.username && verify.password == this.state.password ? setLogin.on : setLogin.off
      ))
    }
    return (
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  as = {'a'}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  href= {login ? "/billBoard" : ""}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }
}

export default Login;

