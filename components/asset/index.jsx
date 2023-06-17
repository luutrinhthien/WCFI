import React from 'react'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { useState, useEffect } from 'react'
import NavBar from '../NavBar'
import { getData, saveData, updateData } from '../../utils/localStorage'
import { Box, Select, Text, Button } from '@chakra-ui/react'
import Card from './components/Card'
import { abi, contractAddress, marketplaceAddress } from '../../constants'

export default function Asset() {
    const [isApprove, setIsApprove] = useState(false)
    const [assetArr, setAssetArr] = useState([])

    const { user, enableWeb3, isWeb3Enabled, account, deactivateWeb3,
        isInitialized, Moralis, isWeb3EnableLoading } = useMoralis()

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
        params: { operator: contractAddress, approved: true },
    })

    // Read function
    const { runContractFunction: isApprovedForAll } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "isApprovedForAll",
        params: { owner: account, operator: marketplaceAddress },
    })

    const { runContractFunction: listTokenIds } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "listTokenIds",
        params: { owner: account },
    })

    async function updateUIValues() {
        if (account) {
            const Approved = (await isApprovedForAll())
            const arrayOfMyAsset = (await listTokenIds())

            let numbersArray = [99, 91]
            if (arrayOfMyAsset) {
                numbersArray = arrayOfMyAsset.map(num => Number(num));
            }

            // console.log("Check array of NUMBER asset in UpdateUI ", numbersArray)

            setIsApprove(Approved)
            setAssetArr(numbersArray)
        }
    }

    // console.log("CHECK MYASSET AT INDEX ", assetArr)

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

    return (
        <Box backgroundColor={"black"}>
            <Box backgroundColor={"black"} color={'white'}>
                <NavBar target="assets"></NavBar>
            </Box>
            <Box display={{ base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", "2xl": "flex" }} style={{ margin: "30px auto", maxWidth: "80%" }} justifyContent={"space-between"}>
                <Box display={"flex"}>
                    <Button mr={3} p={0} variant={"unstyled"} onClick={() => setOptionView("myAsset")}><Text fontWeight={"bold"}
                        color={optionView === "myAsset" ? "white" : "#7D8DA7"} borderBottom={optionView === "myAsset" ? "2px solid" : ""}
                    >My Asset (8)</Text></Button>
                    <Button mr={3} p={0} variant={"unstyled"} onClick={() => setOptionView("listing")}><Text fontWeight={"bold"}
                        color={optionView === "listing" ? "white" : "#7D8DA7"} borderBottom={optionView === "listing" ? "2px solid" : ""}
                    > Listing (3)</Text></Button>
                </Box>
                <Select mt={8} w={"12rem"} color={"white"}>
                    <option value='option1'>Newest</option>
                    <option value='option2'>Price: high to low</option>
                    <option value='option3'>Price: low to high</option>
                </Select>
            </Box>
            <Box style={{ margin: "20px auto", maxWidth: "80%", marginBottom: "0px" }}>
                <Card setApprovalForAll={setApprovalForAll}
                    isApprovedForAll={isApprove}
                    setIsApprove={setIsApprove}
                    assetArr={assetArr} />
            </Box>
        </Box>
    )
}
