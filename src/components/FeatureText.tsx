import { Box, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Heading} from '@chakra-ui/layout'

function FeatureText() {
    return (
        <Box p={4}>
        <Stack spacing={4} maxW={'3xl'} textAlign={'center'} justify="center">
          <Heading fontSize={'3xl'}>Bill Payment </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
          </Text>
        </Stack>
      </Box>      
    )
}

export default FeatureText
