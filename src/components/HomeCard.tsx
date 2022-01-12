import React from 'react'
import {Link} from 'gatsby'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
  } from '@chakra-ui/react';
  
  export default function HomeCard({IMAGE,Title}) {
    return (
      <Link to={'/login'}>
        <Center py={12}>
        <Box
          as={'a'}
          role={'group'}
          p={6}
          height={'400px'}
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
        </Box>
      </Center>
      </Link>
      
    );
  }
