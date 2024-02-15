import React from "react"
import { Box, Text } from '@chakra-ui/react';

const CommissionTable = () => {
  return (
    <Box rounded="lg" bg="#0E1114" p={5}>
    <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>Multi-Level Commission</Text>

    <Box mt={5} py={5} rounded="lg" bg="#0E1114" boxShadow="md">
      <Box display="flex" flexDirection="row" gap={150} color="rgb(99 117 146)">
        <Text>Level</Text>
        <Text>Commission</Text>
      </Box>

      <Box display="flex" flexDirection="row" gap={225} mt={2} color="white">
        <Text>1</Text>
        <Text>25%</Text>
      </Box>

      <Box display="flex" flexDirection="row" gap={225} mt={2} color="white">
        <Text>2</Text>
        <Text>5%</Text>
      </Box>

      <Box display="flex" flexDirection="row" gap={225} mt={2} color="white">
        <Text>3</Text>
        <Text>5%</Text>
      </Box>

      <Box display="flex" flexDirection="row" gap={225} mt={2} color="white">
        <Text>4</Text>
        <Text>5%</Text>
      </Box>
    </Box>
  </Box>
  )
}

export default CommissionTable
