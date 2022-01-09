import React from 'react'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button
  } from '@chakra-ui/react';
  
  export default function HomeCard({IMAGE,Title}) {
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          >
          <Box
            rounded={'lg'}
            pos={'relative'}
            height={'230px'}>
            <Image
              rounded={'lg'}
              height={200}
              width={250}
              objectFit={'scale-down'}
              src={IMAGE}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading color={'gray.500'} fontSize={'medium'} textTransform={'uppercase'}>
              {Title}
            </Heading>
          </Stack>
          <Stack spacing={4} m={6} align={'center'}>
            <Button
              as = {'a'}
              href= {'/login'}
              rounded={'full'}
              size={'md'}
              width={'150px'}
              bg={'gray.300'}
              color={'white'}
              _hover={{
                bg: 'gray.400',
              }}>
              Pay Now
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }
