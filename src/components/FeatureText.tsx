import { Box, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Container, Heading} from '@chakra-ui/layout'

function FeatureText() {
    return (
        <Box p={4}>
        <Stack spacing={4} maxW={'3xl'} as={Container} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Bill Payment System </Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Pay bill in one tap anywhere any time with our bill payment system in zero paper waste.
            it's easy to use and secure your payment system and confirm that none of your bill left with out payment.
          </Text>
        </Stack>
      </Box>      
    )
}

export default FeatureText
