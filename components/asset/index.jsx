import React from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import { getData, saveData, updateData } from '../../utils/localStorage'
import { Box, Select, Text, Button, useDisclosure } from '@chakra-ui/react'
import Card from './components/Card'
import { abi, contractAddress, marketplaceAddress } from '../../constants'
import { useQuery, gql } from '@apollo/client'
import Filter from './components/Filter'

export default function Asset() {
    const { isOpen, onClose, onOpen } = useDisclosure()

    const [isApprove, setIsApprove] = useState(false)

    const [updateBalance, setUpdateBalance] = useState(false)

    const { user, enableWeb3, isWeb3Enabled, account, deactivateWeb3,
        isInitialized, Moralis, isWeb3EnableLoading } = useMoralis()

    const [isFilter, setIsFilter] = useState(false)
    const [itemQuery, setItemQuery] = useState([])

    // Write function
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

    // Read function
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

    const [optionView, setOptionView] = useState("myAsset")


    useEffect(() => {
        const user = getData('user');
        if (user) {
            enableWeb3()
        }
    }, [])

    // graph query to read number of NFT 
    const GET_ITEM = gql`
        {
            tokens(
                where: {
                owner: "${account}"
                  }
            ) {
                id
                tokenId
              }
        }
    `
    const GET_ITEM2 = gql`
        {
            tokens(
                where: {
                owner: "${marketplaceAddress}",
                creator: "${account}"
                  }
            ) {
                id
                tokenId
              }
        }
    `
    const { loading, error, data, refetch } = useQuery(GET_ITEM, {
        variables: optionView,
    })
    const { loading: loading2, error: error2, data: data2, refetch: refetch2 } = useQuery(GET_ITEM2, {
        variables: optionView,
    })

    useEffect(() => {
        refetch(optionView);
    }, [optionView, refetch, updateBalance]);

    useEffect(() => {
        refetch2(optionView);
    }, [optionView, refetch2, updateBalance]);

    console.log("---------ITEM QUERY: ", itemQuery)

    return (
        <Box backgroundColor={"black"}>
            <Box backgroundColor={"black"} color={'white'}>
                <NavBar updateBalance={updateBalance} target="assets"></NavBar>
            </Box>
            {data && <Box display={{ base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} style={{ margin: "30px auto", maxWidth: "80%" }} justifyContent={"space-between"}>
                <Box display={"flex"}>
                    <Button mr={3} p={0} variant={"unstyled"} onClick={() => setOptionView("myAsset")}><Text fontWeight={"bold"} fontSize={14}
                        color={optionView === "myAsset" ? "white" : "#7D8DA7"} borderBottom={optionView === "myAsset" ? "2px solid" : ""}
                    >My Asset ({data.tokens.length})</Text></Button>
                    <Button mr={3} p={0} variant={"unstyled"} onClick={() => setOptionView("listing")}><Text fontWeight={"bold"} fontSize={14}
                        color={optionView === "listing" ? "white" : "#7D8DA7"} borderBottom={optionView === "listing" ? "2px solid" : ""}
                    > Listing ({data2?.tokens.length || 0})</Text></Button>
                </Box>
                <Box display={"flex"}>
                    <Select fontSize={14} rounded={12} w={"12rem"} color={"white"}>
                        <option value='option1'>Newest</option>
                        <option value='option2'>Price: high to low</option>
                        <option value='option3'>Price: low to high</option>
                    </Select>
                    <Button backgroundColor={"black"} variant={"outline"} rounded={12} ml={3} onClick={onOpen}><Text fontSize={14}>Filter&nbsp;</Text>
                        <img src="./filter.png" width={16} height={16} alt="" />
                    </Button>
                </Box>
            </Box>}
            {data && optionView === "myAsset" && <Box style={{ margin: "20px auto", maxWidth: "80%", marginBottom: "0px" }}>
                <Card setApprovalForAll={setApprovalForAll}
                    isApprovedForAll={isApprove} setUpdateBalance={setUpdateBalance}
                    setIsApprove={setIsApprove} optionView="myAsset"
                    filter={isFilter} itemQuery={itemQuery}
                />
            </Box>}
            {data && optionView === "listing" && <Box style={{ margin: "20px auto", maxWidth: "80%", marginBottom: "0px" }}>
                <Card setApprovalForAll={setApprovalForAll}
                    isApprovedForAll={isApprove} setUpdateBalance={setUpdateBalance}
                    setIsApprove={setIsApprove} optionView="listing"
                    filter={isFilter} itemQuery={itemQuery}
                />
            </Box>}

            <Filter isOpen={isOpen} onClose={onClose} setItemQuery={setItemQuery} setIsFilter={setIsFilter} />
        </Box>
    )
}
