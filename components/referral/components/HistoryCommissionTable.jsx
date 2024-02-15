/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useMoralis } from 'react-moralis'
import { Box, Image, Text } from '@chakra-ui/react';

const HistoryCommissionTable = ({refList}) => {
  const { account } = useMoralis()
  const [commissionHistory, setCommissionHistory] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (account) {
  //       const params = { address: account }
  //       try {
  //         // const res = await axios.get('/refs/commission-histories', { params })
  //         // const data = getResponseData(res)
  //         // setCommissionHistory(data)
  //       } catch (err) {
  //         console.log('Error: ', err)
  //       }
  //     }
  //   }

  //   fetchData()
  // }, [account])

  console.log(refList)
  return (
    <Box rounded="lg" bg="#0E1114" p={5}>
    <Text fontSize="2xl" fontWeight="bold" color="white" mb={8}>Referral</Text>

    <Box mt={5} py={5} rounded="lg" bg="#0E1114" boxShadow="md">
      <Box display="flex" flexDirection="row" gap={5} justifyContent="space-between" color="rgb(99 117 146)" fontSize={{ base: "xs", lg: "base" }}>
        <Text>Date</Text>
        <Text>Wallet Address</Text>
        <Text>Earned</Text>
      </Box>

      {!refList && refList?.length === 0 ? (
        <Box mt={5} py={5} display="flex" width={'full'} justifyContent="center" alignItems="center" gap={5}>
          <Image src="/images/no_data.svg" alt="" w={20} h={20} />
        </Box>
      ) : (
        refList?.map((item, index) => (
          <Box key={index} display="flex" flexDirection={{ base: "column", lg: "row" }} justifyContent="space-between" fontSize={{ base: "xs", lg: "sm" }}
          color={'white'} fontWeight={400} mt={3}>
            <Text>{item.ref ? dayjs(Date.now()).format('MM/DD/YYYY') : 'null'}</Text>
            <Text display={{ base: "none", lg: "block" }}>{item && item.ref ? `${item.ref.slice(0, 6)}...${item.ref.slice(-3)}` : '-'}</Text>
            <Box display="flex" alignItems="center" gap={2}>
              <Image src="/bnb.png" alt="" w={5} h={5} />
              <Text>{item.level == 1? '0.000025':'0.000005'}</Text>
            </Box>
          </Box>
        ))
      )}
    </Box>
  </Box>
  )
}

export default HistoryCommissionTable
