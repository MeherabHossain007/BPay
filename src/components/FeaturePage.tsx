import React from 'react'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';


export default function GridListWithHeading() {

const features = [
  {
    title: 'Login/Register',
    text: 'User can login or register to our system',
    color: 'linear(to-l, #7928CA, #FF0080)'
  },

  {
    title: 'Payment Service',
    text: 'User can pay their bill on our site',
    color: 'linear(to-r, #22c1c3, #fdbb2d)'
  },

  {
    title: 'Bill Information',
    text: 'User can see their bill information like due bill current  bill',
    color: 'linear(to-r, #090979,#00d4ff)'
  },

  {
    title: 'Reviews',
    text: 'User can give reviews or complain if they face issue',
    color: 'linear(to-r, #fc466b,#3f5efb)'
  },
  
]
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Our Features</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
        Easy access and fast way of paying bills through Internet and 
        giving user friendly services to everyone.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack align={'top'}>
              <VStack align={'start'}>
                <Text fontWeight={600} bgGradient={feature.color} bgClip='text' fontSize={'xl'}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
