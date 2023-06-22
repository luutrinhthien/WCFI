import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { useMoralis, useWeb3Contract, useMoralisWeb3Api } from 'react-moralis'
import { WalletModal } from 'web3uikit'
import { contractAddress, abi } from '../../../constants'
import { useNotification } from "web3uikit"
import { ethers } from 'ethers'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure
} from '@chakra-ui/react'
import LoadingModal from "./Modal/loadingModal"
import MintResultModal from './Modal/mintResultModal'

export default function Layer02({ mintedTimes, setApprovalForAll,
    isApprovedForAll, mintFee, mint, setMintedTimes, setUpdateBalance, setIsApprove }) {

    const { Moralis, Web3Api } = useMoralisWeb3Api();

    const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545/");

    const { web3 } = useMoralisWeb3Api();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const { user, enableWeb3, isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis()

    const [showResult, setShowResult] = useState(false)

    const [data, setData] = useState()
    const [transactionHash, setTransactionHash] = useState('')

    const handleSuccess = async (tx) => {
        const contract = new ethers.Contract(contractAddress, abi, provider);
        // console.log('Contract: ', contract);
        setTransactionHash(tx);

        contract.on("minted", (rtEvent, newItemId) => {
            // Perform actions when the event is emitted
            console.log('Event emitted:', rtEvent);
            console.log('New Item ID:', newItemId);
            setData(rtEvent)
        });
        // loading modal
        // handleNewNoti(tx)
        onOpen()
        // loading modal

        await tx.wait(1)

        // show result
        handleCompleted(tx)
    }

    const handleCompleted = async (tx) => {
        setMintedTimes(parseInt(mintedTimes) + 1)
        setUpdateBalance((prev) => !prev)
        setShowResult(true)
        onOpen()
    }

    // const handleNewNoti = async (tx) => {
    //     dispatch({
    //         type: "success",
    //         message: "Transaction Tompleted!",
    //         title: "Tx Noti",
    //         position: "topR",
    //         icon: "",
    //     })
    // }

    const [walletOn, setWalletOn] = useState(false)

    const dispatch = useNotification()

    const handleApprove = async () => {
        await setApprovalForAll()
        setIsApprove((prev) => !prev)
    }

    const handleMint = async () => {
        // await mint()
        try {
            await mint({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
            })

        } catch (error) {
            console.error('Error minting:', error);
        }
    }

    // console.log("===============", isApprovedForAll)
    // console.log("=========== transactionHash", transactionHash)

    return (
        <Grid templateColumns='repeat(7, 1fr)'
            gap={0}
        >
            <GridItem colSpan={{ base: 7, sm: 7, md: 4, lg: 4, xl: 4, "2xl": 4 }} bg='#0E1114'
                borderTopLeftRadius={{ base: 10, sm: 10, md: 10, lg: 10, xl: 10, "2xl": 10 }}
                borderTopRightRadius={{ base: 10, sm: 10, md: 0, lg: 0, xl: 0, "2xl": 0 }}
                borderBottomLeftRadius={{ base: 0, sm: 0, md: 10, lg: 10, xl: 10, "2xl": 10 }}>
                <Box p={2}>
                    <Image alt={'championship'} src={'/images/championship.png'} width={600} height={370}></Image>
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: 7, sm: 7, md: 3, lg: 3, xl: 3, "2xl": 3 }} bg='#0E1114'
                borderTopRightRadius={{ base: 0, sm: 0, md: 10, lg: 10, xl: 10, "2xl": 10 }}
                borderBottomRightRadius={{ base: 10, sm: 10, md: 10, lg: 10, xl: 10, "2xl": 10 }}>
                <Box p={5} pr={10}>
                    <Box pt={3} fontSize={16} fontWeight={700}>Mint your NFT</Box>
                    <Box pt={3} mt={5} fontSize={12} fontWeight={200} color={"rgba(121,129,151,0.6)"}>Mint randomly releases NFT shoes to represent the national team</Box>
                    <Box pt={3} display={'flex'} justifyContent={'space-between'}>
                        <Text fontSize={12} fontWeight={200} color={"rgba(121,129,151,0.6)"}>Minted times:</Text>
                        <Text fontSize={12} fontWeight={600}>{mintedTimes}</Text>
                    </Box>
                    <Box pt={3} display={'flex'} justifyContent={'space-between'}>
                        <Box display={'flex'}>
                            <Text fontSize={12} fontWeight={200} color={"rgba(121,129,151,0.6)"}>Mint rate: </Text>
                            <Image alt={'info'} src={'/ques.svg'} width={14} height={14}></Image>
                        </Box>
                        <Text fontSize={12} fontWeight={600}>{
                            (Math.floor(20 * (1 + 0.1) ** parseInt(mintedTimes)))
                                >= 100 ? 99 :
                                (Math.floor(20 * (1 + 0.1) ** parseInt(mintedTimes)))}% Get Tier 1</Text>
                    </Box>
                    <Box>
                        {!account ? <Box className="rounded-xl mt-10 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                            <Box className="flex flex-col justify-between h-full rounded-xl p-1" bg='#0E1114'>
                                <Button onClick={() => setWalletOn(!walletOn)} variant='unstyle' fontSize={14}>Connect Wallet</Button>
                            </Box>
                        </Box>
                            :
                            (!isApprovedForAll ? <Button
                                mt={10}
                                minW={"-webkit-fill-available"}
                                rounded={12}
                                dropShadow={'inner'}
                                border={'black solid 2px'}
                                boxShadow={"3px 3px white"}
                                disabled={isWeb3EnableLoading}
                                onClick={handleApprove}
                                style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}>
                                <Text fontWeight={700} >Approve</Text>
                            </Button> :
                                <Button
                                    mt={10}
                                    minW={"-webkit-fill-available"}
                                    rounded={12}
                                    dropShadow={'inner'}
                                    border={'black solid 2px'}
                                    boxShadow={"3px 3px white"}
                                    disabled={isWeb3EnableLoading}
                                    onClick={handleMint}
                                    style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}>
                                    <Text fontSize={12} fontWeight={700} >Mint with {mintFee ? ethers.utils.formatEther(mintFee) : 0} BNB</Text>
                                </Button>)}
                    </Box>
                    {walletOn && <WalletModal isOpened={true} setIsOpened={function noRefCheck() { setWalletOn(!walletOn) }} />}

                    {/* <Button onClick={onOpen}>Open Modal</Button> */}

                    {!showResult ? <Modal isOpen={isOpen} onClose={onClose} >
                        <ModalOverlay backgroundColor={"rgba(25, 29, 36, 0.64)"} backdropFilter={"blur(5px)"} />
                        <ModalContent borderRadius={15}>
                            <ModalBody backgroundColor={"#0E1114"} pt={10} pb={10} borderRadius={12} position={"relative"}>
                                <LoadingModal />
                            </ModalBody>

                        </ModalContent>
                    </Modal>
                        :
                        <MintResultModal isOpen={isOpen} onClose={onClose} setData={setData}
                            setShowResult={setShowResult} data={data} transactionHash={transactionHash.hash} />
                    }
                </Box>
            </GridItem>
        </Grid >
    )
}
