import { useBoolean } from '@chakra-ui/hooks';
import React, { useEffect, useState } from 'react'
import{
Flex,
Box,
FormControl,
FormLabel,
Input,
Checkbox,
Stack,
Link,
Heading,
Text,
Button,
useColorModeValue,
} from "@chakra-ui/react";

const LogData =({username,password,children}) => {
    const [verify, setVerify] = useState([]);
    useEffect(() => {
      fetch("http://localhost:80/api/")
        .then((res) => res.json())
        .then((result) => {
          setVerify(result);
        });
    }, []);
    var isLogin = new Boolean(false);
    const handleLogin = () => {
    verify.map((verify) =>{ 
      if (username == verify.u_id && password == verify.password) {
        return isLogin = true;
      }
      else{
        return isLogin = false;
      }
    });
    }
    return(
      <div>
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
          {children}
          <Stack spacing={8} my={8} maxW={"lg"}>
            <Button
            onClick={handleLogin}
              as={"a"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              href= { isLogin ? '/billBoard' : ''}
            >
              Sign in
            </Button>
          </Stack>

          </Box>
        </Stack>
      </Flex>
      </div>
    )
}

export default LogData;
