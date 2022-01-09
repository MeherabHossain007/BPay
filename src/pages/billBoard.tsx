import React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  Flex,
  Image,
  Avatar,
  Stack,
  Text,
} from "@chakra-ui/react";
import Title from "../components/Title";
import Form from "../components/Form";
import EbillData from "../components/EbillData";

function billBoard() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            alt={"Logo"}
            objectFit={"none"}
            className="img-responsive"
            src={
              "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/logo.png?alt=media&token=9b826346-add6-41f8-9d81-dcb3d64cf71f"
            }
          />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          align={"center"}
        >
          <Text>meherab788</Text>
          <Avatar size={"md"} />
        </Stack>
      </Flex>
      <Title />
      <Tabs isFitted variant="soft-rounded" align={"center"}>
        <TabList>
          <Tab maxWidth={"250px"}>Electricity Bill</Tab>
          <Tab maxWidth={"250px"}>Water Bill</Tab>
          <Tab maxWidth={"250px"}>Gas Bill</Tab>
          <Tab maxWidth={"250px"}>Internet Bill</Tab>
        </TabList>
        <TabPanels bg={'white'} >
          <TabPanel><EbillData/></TabPanel>
          <TabPanel><Form/></TabPanel>
          <TabPanel><Form/></TabPanel>
          <TabPanel><Form/></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default billBoard;
