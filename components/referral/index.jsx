/* eslint-disable @next/next/no-img-element */
import React from 'react'
import CommissionTable from './components/ComissionTable'
import HistoryCommissionTable from './components/HistoryCommissionTable'
import MyReferralSidebar from './components/MyReferralSidebar'

import { useMoralis } from 'react-moralis'
import { Box, Flex, Text } from '@chakra-ui/react';
import NavBar from '../NavBar'

const Referral = () => {
    const { account } = useMoralis()

  return (
    <Box backgroundColor={"black"}>
            <Box backgroundColor={"black"} color={'white'}>
                <NavBar target="marketplace"></NavBar>
            </Box>

            <Box display={{ base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} style={{ margin: "20px auto", maxWidth: "80%" }} justifyContent={"space-between"}>
                <Flex flexDirection={{ base: "column-reverse", lg: "row" }} gap={{ base: 10, lg: 5 }}>
                    <Box w={{ base: "full", lg: "7/12" }} flex="1" display="flex" flexDirection="column" gap={8}>
                    <Text fontWeight="bold" fontSize="lg" lineHeight="normal" color="white">Referral Program</Text>
                    <Text fontWeight="normal" fontSize="sm" color="rgb(99 117 146)" lineHeight="normal">
                        Invite friends with referral link and get up to{' '}
                        <Text as="span" color="green.500">50%</Text> commission every time your
                        friends mint NFT.
                    </Text>

                    <CommissionTable />
                    <HistoryCommissionTable />
                    </Box>
                    <MyReferralSidebar address={account} />
                </Flex>
            </Box>
  </Box>
  )
}

export default Referral
