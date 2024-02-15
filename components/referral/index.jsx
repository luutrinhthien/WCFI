/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import CommissionTable from './components/ComissionTable'
import HistoryCommissionTable from './components/HistoryCommissionTable'
import MyReferralSidebar from './components/MyReferralSidebar'
import { abi, contractAddress, marketplaceAddress } from '../../constants'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { Box, Flex, Text } from '@chakra-ui/react';
import NavBar from '../NavBar'

const Referral = () => {
    const { account } = useMoralis()
    const [refList, setRefList] = useState()
    const [totalReward, setTotalReward] = useState()
    const [totalClaim, setTotalClaim] = useState()
    const [reload, setReload] = useState(false)

    const {
        runContractFunction: claimReward
    } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "claimReward",
        msgValue: 0,
        params: {ref: account},
    })

    const { runContractFunction: getRefList } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "getRefList",
        params: { ref: account },
    })

    const { runContractFunction: getTotalReward } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "getTotalReward",
        params: { ref: account },
    })

    const { runContractFunction: getTotalClaim } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "getTotalClaim",
        params: { ref: account },
    })


    useEffect(()=>{
        if(account){
            const getRef = async ()=>{
                try {
                    const res = await getRefList();
                    setRefList(res)
                    const res1 = await getTotalReward();
                    setTotalReward(res1)
                    const res2 = await getTotalClaim();
                    setTotalClaim(res2)
                } catch (error) {
                    console.log("Get data error: ", error)
                }
            }
            getRef()
        }
    },[account,reload])

  return (
    <Box backgroundColor={"black"}>
            <Box backgroundColor={"black"} color={'white'}>
                <NavBar target="referral"></NavBar>
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
                    <HistoryCommissionTable refList={refList} />
                    </Box>
                    <MyReferralSidebar address={account} totalReward={totalReward} totalClaim={totalClaim} 
                    refList={refList} claimReward={claimReward} setReload={setReload}/>
                </Flex>
            </Box>
  </Box>
  )
}

export default Referral
