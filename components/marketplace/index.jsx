import React from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { useState, useEffect } from 'react'
import { Button } from 'web3uikit'
import NavBar from '../NavBar'
import { getData, saveData, updateData } from '../../utils/localStorage'
import Information from './components/Information'
import { Box, Select, Text } from '@chakra-ui/react'
import Card from './components/Card'
import { abi, contractAddress, marketplaceAddress } from '../../constants'

export default function Marketplace() {
    const [isApprove, setIsApprove] = useState(false)

    const { user, enableWeb3, isWeb3Enabled, account, deactivateWeb3,
        isInitialized, Moralis, isWeb3EnableLoading } = useMoralis()

    const {
        runContractFunction: setApprovalForAll,
        data: enterTxResponse,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "setApprovalForAll",
        // msgValue: entranceFee,
        params: { operator: marketplaceAddress, approved: true },
    })

    const { runContractFunction: isApprovedForAll } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "isApprovedForAll",
        params: { owner: account, operator: marketplaceAddress },
    })

    async function updateUIValues() {
        if (account) {
            const Approved = (await isApprovedForAll())
            setIsApprove(Approved)
        }
    }

    useEffect(() => {
        if (isWeb3Enabled && account) {
            updateUIValues()
        }
    }, [isWeb3Enabled, account])


    // console.log("CHECKKKKK isApprove AT INDEX ===== ", isApprove)
    // console.log("CHECKKKKK account AT INDEX ===== ", account)
    // console.log("CHECKKKKK isWeb3Enabled AT INDEX ===== ", isWeb3Enabled)


    useEffect(() => {
        const user = getData('user');
        if (user) {
            enableWeb3()
        }
    }, [])

    return (
        <Box backgroundColor={"black"}>
            <Box backgroundColor={"black"} color={'white'}>
                <NavBar target="marketplace"></NavBar>
                <Box style={{ margin: "40px auto", maxWidth: "80%", marginBottom: "0px" }}>
                    <Information />
                </Box>
            </Box>
            <Box display={{ base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} style={{ margin: "20px auto", maxWidth: "80%" }} justifyContent={"space-between"}>
                <Text backgroundColor={"black"} color={'white'} fontWeight={"bold"} fontSize={24}>Items (Total 90,000)</Text>
                <Select w={"12rem"} color={"white"}>
                    <option value='option1' >Newest</option>
                    <option value='option2'>Price: high to low</option>
                    <option value='option3'>Price: low to high</option>
                </Select>
            </Box>
            <Box style={{ margin: "20px auto", maxWidth: "80%", marginBottom: "0px" }}>
                <Card setApprovalForAll={setApprovalForAll}
                    isApprovedForAll={isApprove}
                    setIsApprove={setIsApprove} />
            </Box>
        </Box>
    )
}
