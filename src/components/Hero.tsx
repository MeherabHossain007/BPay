import React from 'react'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Stack minH={'40vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'space-between'}>
        <Stack spacing={6} w={'full'} maxW={'xl'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              B-Pay
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Bill pay & Management System
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Get Started
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex h={'40vh'}>
        <Image
          alt={'Login Image'}
          objectFit={'scale-down'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/6617.jpg?alt=media&token=28beddc3-3a1b-47e7-bcf8-2ee9208fd494'
          }
        />
      </Flex>
    </Stack>
  );
}