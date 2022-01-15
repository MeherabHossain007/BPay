import React, {Component} from 'react'

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import axios from 'axios';

  class SignUp extends Component {
    
    state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: ""
    }

    handleAdd = async e => {
      await this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
      })
    }

    handleSubmit= e => {
      let formData = new FormData();
      formData.append("userName",this.state.userName);
      formData.append("firstName",this.state.firstName);
      formData.append("lastName",this.state.lastName);
      formData.append("email",this.state.email);
      formData.append("password",this.state.password);
      const url = "http://localhost:80/SignUp/";
      axios.post(url, formData)
      .then(res=> console.log(res.data))
      .catch(err=> console.log(err));
    }
    render() {
      const [showPassword, setShowPassword] = useState(false);
      return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>  
              <Stack spacing={4}>
              <FormControl id="userName" isRequired>
                  <FormLabel>User Name</FormLabel>
                  <Input
                  name={'userName'}
                  onChange={this.handleAdd}
                   type="text" />
                </FormControl>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                      name={'firstName'}
                       onChange={this.handleAdd}
                       type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input
                      name={'lastName'}
                      onChange={this.handleAdd}
                       type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                  onChange={this.handleAdd}
                  name={'email'}
                   type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                    onChange={this.handleAdd}
                    name={'password'}
                     type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                  onClick={this.handleSubmit}
                  as={'a'}
                  size="lg"
                  color= 'white'
                  variant={'solid'}
                   bg = 'blue.400'
                 _hover={{
                  bg: 'blue.500',
                  }}
              href= {"/"}>
              Sign Up
            </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link href='/login' color={'blue.400'}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      );
    }
   }

  export default SignUp;