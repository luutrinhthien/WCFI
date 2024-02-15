import { Box, Button, Text, Grid, GridItem, Select } from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import metadata from '../../../utils/metadata'
import { WalletModal, useNotification } from 'web3uikit'
import { marketplaceAddress, marketplaceAbi } from "../../../constants"
import { Context } from "../../../context/Context"
import { handleNewNotiWating, handleNewNotiSuccess } from "../../../utils/notification/Notification"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@chakra-ui/react'

export default function SingleCard({ setApprovalForAll, isApprovedForAll,
    setIsApprove, country, tokenId, price, setReloadCards, setUpdateBalance }) {
    const { user, enableWeb3, isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis()

    const reload = useContext(Context)
    const [walletOn, setWalletOn] = useState(false)

    const { isOpen, onClose, onOpen } = useDisclosure()

    const dispatch = useNotification()

    const closeAllFunc = (tx) => {
        setTimeout(() => {
            setReloadCards(prev => !prev)
            setUpdateBalance(prev => !prev)
            handleNewNotiSuccess(dispatch, tx)
        }, [3000])
    }

    const waitingForTx = (tx) => {
        handleNewNotiWating(dispatch, tx)
        onClose();
    }

    /// write function
    const {
        runContractFunction: buyNft,
        data: enterTxResponsebuyNft,
        isLoadingbuyNft,
        isFetchingbuyNft,
    } = useWeb3Contract({
        abi: marketplaceAbi,
        contractAddress: marketplaceAddress,
        functionName: "buyNft",
        params: { tokenId: tokenId },
        msgValue: price
    })

    // handle function
    const handleApprove = async () => {
        const handleSuccess = async (tx) => {
            await tx.wait(1)
            setIsApprove((prev) => !prev)
            setUpdateBalance(prev => !prev)
        }
        try {
            await setApprovalForAll({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
            })

        } catch (error) {
            console.error('Error Aprrove:', error);
        }
    }

    const handeBuy = async () => {
        const handleSuccess = async (tx) => {
            waitingForTx(tx)
            await tx.wait(1)
            console.log("BUY NFT SUCCESSFULL !")
            reload[1](prev => !prev)
            closeAllFunc(tx)
        }
        try {
            await buyNft({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
            })

        } catch (error) {
            console.error('Error buy NFT:', error);
        }
    }

    return (
        <Box>
            <Box onClick={onOpen}>
                <Box className={metadata[country].attributes[1].value == 1 ? "rounded-lg mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]"
                    : (metadata[country].attributes[1].value == 2 ? "rounded-lg mx-auto bg-yellow-700 p-[2px]" :
                        (metadata[country].attributes[1].value == 3 ? "rounded-lg mx-auto bg-blue-700 p-[2px]" : "rounded-lg mx-auto bg-gray-700 p-[2px]"))} onClick={onOpen}>
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='black'>
                        <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={`/shoes/${country}.png`} width={330} height={400}></img>

                        <Box fontSize={12} p={4} background={"#0E1114"}>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem colSpan={1}>
                                    <Text mt={1} color={"rgba(41,49,61,1)"}>Team</Text>
                                    <Text mt={1} color={"white"}>{metadata[country].name}</Text>
                                    <Box mt={4} pt={4} borderTop={"1px solid rgba(41,49,61,1)"} color={"rgba(41,49,61,1)"}>Estimate</Box>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Text mt={1} color={"rgba(41,49,61,1)"}>Rarity</Text>
                                    <Text mt={1} color={"white"}>{metadata[country].attributes[2].value}%</Text>
                                    <Box mt={4} color={"white"} pt={4} borderTop={"1px solid rgba(41,49,61,1)"}>≈{Number(price) / 1000000000000000000} ETH</Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Modal motionPreset='slideInBottom' isOpen={isOpen} onClose={() => { onClose(); }} className='transparent-div'>
                <ModalOverlay backgroundColor={"rgba(25, 29, 36, 0.64)"} backdropFilter={"blur(5px)"} />

                <ModalContent rounded={"xl"} backgroundColor={"transparent"}>
                    <ModalHeader display={"flex"} justifyContent={"space-between"} w={{ base: "auto", sm: "auto", md: "130%", lg: "130%", xl: "130%", "2xl": "130%" }} backgroundColor={"#0E1114"}>
                        <Box color={"white"}>NFT Detail</Box>
                        <Button color={"white"} variant={"unstyled"} onClick={onClose} fontSize={20}>&times;</Button>
                    </ModalHeader>

                    <ModalBody p={10} pl={2} w={{ base: "auto", sm: "auto", md: "130%", lg: "130%", xl: "130%", "2xl": "130%" }} pt={4} backgroundColor={"#0E1114"} pb={4} color={"white"}>
                        <Grid templateColumns='repeat(2, 1fr)'>
                            <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}>
                                {/* <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={`/shoes/${country}.png`} width={330} height={400}></img> */}
                                <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={`/shoes/${country}.png`} width={330} height={400}></img>
                            </GridItem>
                            <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }} ml={3}>
                                <Box fontSize={20} fontWeight={"semibold"}>
                                    <a
                                        className={metadata[country].attributes[1].value == 1 ? "bg-gradient-to-r from-teal-200 via-cyan-300 via-purple-400 to-pink-400 text-transparent bg-clip-text "
                                            : (metadata[country].attributes[1].value == 2 ? "text-yellow-500" : (metadata[country].attributes[1].value == 3 ? "text-blue-500" : "text-gray-500"))}
                                    >
                                        Tier {metadata[country].attributes[1].value}
                                    </a>
                                </Box>
                                <Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={14} mt={2} color={"rgba(41,49,61,1)"}>Team</Text>
                                        <Box fontSize={15} mt={2} fontWeight={"semibold"}>{metadata[country].name}</Box>
                                    </Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={14} mt={2} color={"rgba(41,49,61,1)"}>Rarity</Text>
                                        <Box fontSize={15} mt={2} fontWeight={"semibold"}>{metadata[country].attributes[2].value}%</Box>
                                    </Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={14} mt={2} color={"rgba(41,49,61,1)"}>ID</Text>
                                        <Box fontSize={15} mt={2} fontWeight={"semibold"}>#{Number(tokenId)}</Box>
                                    </Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={14} mt={2} color={"rgba(41,49,61,1)"}>Price</Text>
                                        <Box fontSize={15} mt={2} fontWeight={"semibold"}>{Number(price) / 1000000000000000000} ETH</Box>
                                    </Box>
                                </Box>
                                {!isApprovedForAll && account ? <Button
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
                                    (account ? <Button
                                        mt={10}
                                        minW={"-webkit-fill-available"}
                                        rounded={12}
                                        dropShadow={'inner'}
                                        border={'black solid 2px'}
                                        boxShadow={"3px 3px white"}
                                        disabled={isWeb3EnableLoading}
                                        onClick={handeBuy}
                                        style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}>
                                        <Text fontWeight={700} >Buy</Text>
                                    </Button>
                                        :
                                        <Box className="rounded-xl mt-10 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                                            <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='#0E1114'>
                                                <Button
                                                    rounded={12}
                                                    background={"black"}
                                                    disabled={isWeb3EnableLoading}
                                                    onClick={() =>
                                                        setWalletOn(!walletOn)
                                                    }>
                                                    <Text fontWeight={700} >Connect Wallet</Text>
                                                </Button>
                                            </Box>
                                        </Box>)}
                                {walletOn && <WalletModal isOpened={true} setIsOpened={function noRefCheck() { setWalletOn(!walletOn) }} />}
                            </GridItem>
                        </Grid>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </Box>
    )
}
