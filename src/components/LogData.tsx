import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

const LogData = ({ username, password, children }) => {
  const [verify, setVerify] = useState([]);
  useEffect(() => {
    fetch("http://localhost:80/api/")
      .then((res) => res.json())
      .then((result) => {
        setVerify(result);
      });
  }, []);
  var isLogin: string;
  verify.map((verify) => {
    if (username == verify.u_id && password == verify.password) {
      isLogin = "/billBoard";
      return isLogin;
    } 
  });
  const toast = useToast();
  return (
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
                onClick={() =>
                  isLogin == undefined
                    ? toast({
                        title: "password or username is invalid",
                        status: "warning",
                        duration: 900,
                        isClosable: true,
                      })
                    : ""
                }
                as={"a"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                href={isLogin}
              >
                Sign in
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default LogData;
