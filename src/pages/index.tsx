import * as React from "react";
import { useState } from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { HStack } from "@chakra-ui/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <>
          <Hero />
          <HStack spacing={3} justify="center">
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </HStack>
          <p>Hello world!</p>
        </>
      </Layout>
      {/* <Navbar /> */}
    </main>
  );
};

export default IndexPage;
