import React, { Component, useEffect, useState } from "react";
import LogData from "../components/LogData";
import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
} from "@chakra-ui/react";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleAdd = async (e) => {
    await this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <LogData username={this.state.username} password={this.state.password}>
        <Stack spacing={4}>
          <FormControl id="Username">
            <FormLabel>Username</FormLabel>
            <Input name={'username'}
                  onChange={this.handleAdd}
                   type="text"/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input onChange={this.handleAdd}
                    name={'password'}
                    type="password"/>
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
            </Stack>
          </Stack>
        </Stack>
      </LogData>
    );
  }
}

export default Login;
