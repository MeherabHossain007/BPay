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
          <Stack direction={'row'} spacing={4}>
            <Button
              as = {'a'}
              href= {"/signUp"}
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
      <Flex h={'50vh'}>
        <Image
          alt={'Login Image'}
          boxSize={'600px'}
          objectFit={'contain'}
          src={
            'https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/997%20%5BConverted%5D.png?alt=media&token=d3fd3677-4b69-4d00-a508-f95fd935239c'
          }
        />
      </Flex>
    </Stack>
  );
}