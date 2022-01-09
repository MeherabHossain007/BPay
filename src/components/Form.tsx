import React from "react";

import {
  Container,
  Flex,
  Box,
} from "@chakra-ui/react";

function Form() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Form;
