import NavBar from './NavBar'
import { Grid, GridItem, Box, Show, Hide, useDisclosure, Button } from '@chakra-ui/react'
import { useNotification } from "web3uikit"
import { abi, contractAddress, marketplaceAddress } from '../constants'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { useState, useEffect } from 'react'
import Layer01 from './home/layers/Layer01'
import Layer02 from './home/layers/Layer02'
import Layer03 from './home/layers/Layer03'
import Layer04 from './home/layers/Layer04'
import Layer05 from './home/layers/Layer05'
import Layer06 from './home/layers/Layer06'
import { useRouter } from 'next/router';

export default function Index() {
    const router = useRouter();
    const refParam = router.query.ref;

    const { isWeb3Enabled, account } = useMoralis()

    const [mintedTimes, setMintedTimes] = useState(0)
    const [isApprove, setIsApprove] = useState(false)
    const [mintFeeUI, setMintFeeUI] = useState(0)
    const [updateBalance, setUpdateBalance] = useState(false)

    /* Write Functions */
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

    const {
        runContractFunction: mint
    } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "mint",
        // msgValue: entranceFee,
        params: {},
        msgValue: "100000000000000"
    })

    const {
        runContractFunction: mintWithRef
    } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress,
        functionName: "mintWithRef",
        params: {ref: refParam},
        msgValue: "100000000000000"
    })

    /* Read Functions */
    const { runContractFunction: balanceOf } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "balanceOf",
        params: { owner: account },
    })

    const { runContractFunction: isApprovedForAll } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "isApprovedForAll",
        params: { owner: account, operator: marketplaceAddress },
    })

    const { runContractFunction: mintFee } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "mintFee",
        params: {},
    })

    /* Update UI */
    async function updateUIValues() {
        if (account) {
            const Approved = (await isApprovedForAll())
            const mintNum = parseInt(await mintFee())
            const balanceOfUser = (await balanceOf())?.toString()
            setIsApprove(Approved)
            setMintFeeUI(mintNum)
            setMintedTimes(balanceOfUser)
        }
    }
    useEffect(() => {
        if (isWeb3Enabled && account) {
            updateUIValues()
        }
    }, [isWeb3Enabled, account])


    return (
        <Box backgroundColor={"black"} color={'white'}>
            <NavBar updateBalance={updateBalance} target="home"></NavBar>
            <Box style={{ margin: "50px auto", maxWidth: "80%" }}>
                <Grid
                    templateRows='repeat(4, 0fr)'
                    templateColumns='repeat(12, 1fr)'
                    gap={6}
                >
                    <GridItem colSpan={{ base: 12, sm: 12, md: 12, lg: 9, xl: 9, "2xl": 9 }} borderRadius={10} rowSpan={1}>
                        <Layer01 />
                    </GridItem>
                    <GridItem rowSpan={{ base: 0, sm: 0, md: 0, lg: 2, xl: 2, "2xl": 2 }} colSpan={3} bg='#0E1114' borderRadius={10}>
                        <Hide below='lg'>
                            <Layer05 />
                        </Hide>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, sm: 12, md: 12, lg: 9, xl: 9, "2xl": 9 }} rowSpan={1}>
                        <Layer02 mintedTimes={mintedTimes} setApprovalForAll={setApprovalForAll}
                            isApprovedForAll={isApprove} mintFee={mintFeeUI} mint={mint} setMintedTimes={setMintedTimes}
                            setUpdateBalance={setUpdateBalance} setIsApprove={setIsApprove} mintWithRef={mintWithRef}
                        />
                    </GridItem>
                    <GridItem colSpan={{ base: 12, sm: 12, md: 12, lg: 9, xl: 9, "2xl": 9 }} rowSpan={1}>
                        <Layer03 />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={3} bg='#0E1114' borderRadius={10}>
                        <Hide below='lg'>
                            <Layer06 />
                        </Hide>
                    </GridItem>
                    <GridItem colSpan={{ base: 12, sm: 12, md: 12, lg: 9, xl: 9, "2xl": 9 }} rowSpan={1}>
                        <Layer04 />
                    </GridItem>
                    <Show below='lg'>
                        <GridItem borderRadius={10} colSpan={{ base: 12, sm: 12, md: 12, lg: 9, xl: 9, "2xl": 9 }} bg='#0E1114' rowSpan={1}>
                            <Layer05 />
                        </GridItem>
                        <GridItem borderRadius={10} colSpan={{ base: 12, sm: 12, md: 12, lg: 9, xl: 9, "2xl": 9 }} bg='#0E1114' rowSpan={1}>
                            <Layer06 />
                        </GridItem>
                    </Show>
                </Grid>
            </Box>



        </Box>
    )
}
