/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { Box, Image, Text } from '@chakra-ui/react';

const HistoryCommissionTable = () => {
  const { account } = useMoralis()
  const [commissionHistory, setCommissionHistory] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      if (account) {
        const params = { address: account }
        try {
          const res = await axios.get('/refs/commission-histories', { params })
          const data = getResponseData(res)
          setCommissionHistory(data)
        } catch (err) {
          console.log('Error: ', err)
        }
      }
    }

    fetchData()
  }, [account])
  return (
    <Box rounded="lg" bg="#0E1114" p={5}>
    <Text fontSize="2xl" fontWeight="bold" color="white" mb={8}>Referral</Text>

    <Box mt={5} py={5} rounded="lg" bg="#0E1114" boxShadow="md">
      <Box display="flex" flexDirection="row" gap={5} color="rgb(99 117 146)" fontSize={{ base: "xs", lg: "base" }}>
        <Text>Date</Text>
        <Text>Wallet Address</Text>
        <Text>Earned</Text>
      </Box>

      {commissionHistory.length === 0 ? (
        <Box mt={5} py={5} display="flex" justifyContent="center" alignItems="center" gap={5}>
          <Image src="/images/no_data.svg" alt="" w={20} h={20} />
        </Box>
      ) : (
        commissionHistory.map((item, index) => (
          <Box key={index} display="flex" flexDirection={{ base: "column", lg: "row" }} justifyContent="space-between" fontSize={{ base: "xs", lg: "sm" }}>
            <Text>{item.createdAt ? dayjs(parseFloat(item.createdAt) * 1000).format('MM/DD/YYYY') : 'null'}</Text>
            <Text display={{ base: "none", lg: "block" }}>{item && item.downLine ? `${item.downLine.slice(0, 6)}...${item.downLine.slice(-3)}` : '-'}</Text>
            <Box display="flex" alignItems="center" gap={2}>
              <Image src="https://d1fdloi71mui9q.cloudfront.net/iMWarJIZQl6F69HPBmm3_0G9qdRKlYzBNic51" alt="" w={5} h={5} />
              <Text>{item.commission}</Text>
            </Box>
          </Box>
        ))
      )}
    </Box>
  </Box>
  )
}

export default HistoryCommissionTable
