import * as React from "react";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import Layout from "../components/Layout";
import { Container, HStack } from "@chakra-ui/layout";
import FeatureText from "../components/FeatureText";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <>
          <Hero />
          <Container
          spacing={4}
          justify={'center'}
          align={'center'}
          >
            <FeatureText/>
          </Container>
          <HStack spacing={3} justify="center">
            <HomeCard IMAGE={"https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Asset%201.png?alt=media&token=12600ea4-39b5-4b70-87e5-f6bacec0c3da"}
             Title={"Water Bill"}
             />
            <HomeCard IMAGE={"https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Asset%202.png?alt=media&token=df72e4bc-90db-4a42-a5e9-3ef9fb392831"}
            Title={"Gas Bill"}
            />
            <HomeCard IMAGE={"https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Asset%203.png?alt=media&token=6aa9f6cc-b6dd-45ce-a6af-338b878b013b"}
            Title={"Electricity Bill"}
            />
          </HStack>
        </>
      </Layout>
    </main>
  );
};

export default IndexPage;
