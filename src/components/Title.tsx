import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  import * as React from 'react';
  export default function Title() {
    return (
      <Container maxW={'-webkit-fit-content'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            lineHeight={'110%'}>
            Bill Payment & Management System{' '}
            <Text as={'span'} color={'blue.400'}>
              Dashboard
            </Text>
          </Heading>
        </Stack>
      </Container>
    );
  }