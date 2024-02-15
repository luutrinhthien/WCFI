import {
    Box, Button, Text, Grid, GridItem, Select,
    Input, InputGroup, InputRightElement, InputLeftElement
} from '@chakra-ui/react'
import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import metadata from '../../../utils/metadata'
import { marketplaceAddress, marketplaceAbi } from "../../../constants"
import { useNotification } from "web3uikit"
import { Context } from "../../../context/Context"
import { handleNewNotiWating, handleNewNotiSuccess } from "../../../utils/notification/Notification"

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@chakra-ui/react'

export default function SingleCard({ setApprovalForAll, isApprovedForAll,
    setIsApprove, country, tokenId, optionView, price, setUpdateBalance
    , setReloadCards }) {

    const { user, enableWeb3, isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis()

    const reload = useContext(Context)

    const dispatch = useNotification()

    const { isOpen, onClose, onOpen } = useDisclosure()

    const [isSellView, setIsSellView] = useState(false)
    const [isUpdateView, setIsUpdateView] = useState(false)

    const [input, setInput] = useState("")

    const closeAllFunc = (tx) => {
        setTimeout(() => {
            setReloadCards(prev => !prev)
            setUpdateBalance(prev => !prev)
            handleNewNotiSuccess(dispatch, tx)
        }, [3000])
    }

    const waitingForTx = (tx) => {
        handleNewNotiWating(dispatch, tx)
        onClose(); setIsSellView(false); setIsUpdateView(false); setInput("")
    }
    /// write function
    const {
        runContractFunction: updateListingNftPrice,
        data: enterTxResponseUpdate,
        isLoadingUpdate,
        isFetchingUpdate,
    } = useWeb3Contract({
        abi: marketplaceAbi,
        contractAddress: marketplaceAddress,
        functionName: "updateListingNftPrice",
        params: { tokenId: tokenId, price: BigInt(input * 10 ** 18) },
    })

    const {
        runContractFunction: listNft,
        data: enterTxResponseListNft,
        isLoadingListNft,
        isFetchingListNft,
    } = useWeb3Contract({
        abi: marketplaceAbi,
        contractAddress: marketplaceAddress,
        functionName: "listNft",
        params: { tokenId: tokenId, price: BigInt(input * 10 ** 18) },
    })

    const {
        runContractFunction: UnlistNFT,
        data: enterTxResponseUnlistNFT,
        isLoadingUnlistNFT,
        isFetchingUnlistNFT,
    } = useWeb3Contract({
        abi: marketplaceAbi,
        contractAddress: marketplaceAddress,
        functionName: "unlistNft",
        params: { tokenId: tokenId },
    })

    /// handle function

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
        // console.log(input)
    }

    const handleUnlist = async () => {
        const handleSuccess = async (tx) => {
            waitingForTx(tx)
            await tx.wait(1)
            console.log("CANCEL NFT SUCCESSFULL !")
            closeAllFunc(tx)
        }
        try {
            await UnlistNFT({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
            })

        } catch (error) {
            console.error('Error cancel NFT:', error);
        }
    }
    const handleUpdate = async () => {
        const handleSuccess = async (tx) => {
            waitingForTx(tx)
            await tx.wait(1)
            console.log("UPDATE PRICE NFT SUCCESSFULL !")
            closeAllFunc(tx)
        }
        try {
            await updateListingNftPrice({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
            })

        } catch (error) {
            console.error('Error update price NFT:', error);
        }
    }
    const handleSell = async () => {
        const handleSuccess = async (tx) => {
            waitingForTx(tx)
            await tx.wait(1)
            console.log("LIST NFT SUCCESSFULL !")
            closeAllFunc(tx)
        }
        try {
            await listNft({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
            })

        } catch (error) {
            console.error('Error List NFT:', error);
        }
    }

    useEffect(() => {
        setIsApprove(isApprovedForAll)
    }, [isApprovedForAll])
    return (
        <Box>
            <Box onClick={onOpen}>
                <Box className={metadata[country].attributes[1].value == 1 ? "rounded-lg mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]"
                    : (metadata[country].attributes[1].value == 2 ? "rounded-lg mx-auto bg-yellow-700 p-[2px]" :
                        (metadata[country].attributes[1].value == 3 ? "rounded-lg mx-auto bg-blue-700 p-[2px]" : "rounded-lg mx-auto bg-gray-700 p-[2px]"))} onClick={onOpen}>
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='black'>
                        {/* <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={`/shoes/${country}.png`} width={330} height={400}></img> */}
                        <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={`/shoes/${country}.png`} width={330} height={400}></img>

                        <Box p={4} fontSize={14} background={"#0E1114"}>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem colSpan={1}>
                                    <Text mt={1} color={"rgba(41,49,61,1)"}>Team</Text>
                                    <Text mt={1} color={"white"}>{metadata[country].name}</Text>
                                    <Box mt={4} pt={4} borderTop={"1px solid rgba(41,49,61,1)"} color={"rgba(41,49,61,1)"}>Estimate</Box>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Text mt={1} color={"rgba(41,49,61,1)"}>Rarity</Text>
                                    <Text mt={1} color={"white"}>{metadata[country].attributes[2].value}%</Text>
                                    <Box mt={4} color={"white"} pt={4} borderTop={"1px solid rgba(41,49,61,1)"}>≈$68,000</Box>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>


            {!isSellView ?
                // Information before sell view
                <Modal motionPreset='slideInBottom' isOpen={isOpen} onClose={() => { onClose() }} className='transparent-div'>
                    <ModalOverlay backgroundColor={"rgba(25, 29, 36, 0.64)"} backdropFilter={"blur(5px)"} />

                    <ModalContent rounded={"xl"} backgroundColor={"transparent"}>
                        <ModalHeader display={"flex"} justifyContent={"space-between"} w={{ base: "auto", sm: "auto", md: "130%", lg: "130%", xl: "130%", "2xl": "130%" }} backgroundColor={"#0E1114"}>
                            <Box color={"white"}>NFT Detail</Box>
                            <Button color={"white"} variant={"unstyled"} onClick={() => { onClose() }} fontSize={18}>&times;</Button>
                        </ModalHeader>

                        <ModalBody p={10} pl={2} w={{ base: "auto", sm: "auto", md: "130%", lg: "130%", xl: "130%", "2xl": "130%" }} pt={4} backgroundColor={"#0E1114"} pb={4} color={"white"}>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}>
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
                                            <Text mt={2} color={"rgba(41,49,61,1)"} fontSize={14}>Team</Text>
                                            <Box fontSize={15} mt={2} fontWeight={"semibold"}>{metadata[country].name}</Box>
                                        </Box>
                                        <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                            <Text mt={2} color={"rgba(41,49,61,1)"} fontSize={14}>Rarity</Text>
                                            <Box fontSize={15} mt={2} fontWeight={"semibold"}>{metadata[country].attributes[2].value}%</Box>
                                        </Box>
                                        <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                            <Text mt={2} color={"rgba(41,49,61,1)"} fontSize={14}>ID</Text>
                                            <Box fontSize={15} mt={2} fontWeight={"semibold"}>#{Number(tokenId)}</Box>
                                        </Box>
                                        <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                            <Text mt={2} color={"rgba(41,49,61,1)"} fontSize={14}>Price</Text>
                                            <Box fontSize={15} mt={2} fontWeight={"semibold"}>{price ? price / (1 * 10 ** 18) + " ETH" : "≈$68,000"}</Box>
                                        </Box>
                                    </Box>
                                    {optionView != "listing" && <Button
                                        mt={10}
                                        minW={"-webkit-fill-available"}
                                        rounded={12}
                                        dropShadow={'inner'}
                                        border={'black solid 2px'}
                                        boxShadow={"3px 3px white"}
                                        disabled={isWeb3EnableLoading}
                                        onClick={() => setIsSellView(true)}
                                        style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}>
                                        <Text fontWeight={700} >Sell</Text>
                                    </Button>}
                                    {optionView === "listing" &&
                                        <div className="rounded-xl mt-5 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                                            <Box className="flex flex-col justify-between h-full rounded-lg p-0" bg='#0E1114'>
                                                <Button
                                                    onClick={() => { setIsUpdateView(true); setIsSellView(true); handleUpdate() }}
                                                    variant='unstyle'><Text fontWeight={700} fontSize={14}>Change Price</Text></Button>
                                            </Box>
                                        </div>}
                                    {optionView === "listing" &&
                                        <Button
                                            mt={5}
                                            minW={"-webkit-fill-available"}
                                            variant={"link"}
                                            disabled={isWeb3EnableLoading}
                                            onClick={handleUnlist}
                                            style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                            <Text fontWeight={700} fontSize={14}>Cancel Listing</Text>
                                        </Button>}
                                </GridItem>
                            </Grid>
                        </ModalBody>
                    </ModalContent>

                </Modal>
                : // Setting sell view

                <Modal motionPreset='slideInBottom' isOpen={isOpen} onClose={() => { onClose(); setIsSellView(false); setIsUpdateView(false); setInput("") }} className='transparent-div'>
                    <ModalOverlay backgroundColor={"rgba(25, 29, 36, 0.64)"} backdropFilter={"blur(5px)"} />
                    <ModalContent fontSize={13} rounded={"xl"} backgroundColor={"transparent"}>
                        <ModalHeader display={"flex"} justifyContent={"space-between"} w={{ base: "auto", sm: "auto", md: "130%", lg: "130%", xl: "130%", "2xl": "130%" }} backgroundColor={"#0E1114"}>
                            <Box color={"white"}>{isUpdateView ? "Change Price" : "Sell NFT"}</Box>
                            <Button color={"white"} variant={"unstyled"} fontSize={20} onClick={() => { onClose(); setIsSellView(false); setIsUpdateView(false); setInput("") }}>&times;</Button>
                        </ModalHeader>

                        <ModalBody p={3} pl={6} pr={6} w={{ base: "auto", sm: "auto", md: "130%", lg: "130%", xl: "130%", "2xl": "130%" }} pt={4} rounded={"xl"} backgroundColor={"#0E1114"} pb={4} color={"white"}>
                            <Text ml={10} mb={2} color={"#7D8DA7"}> Enter Price (ETH)</Text>
                            <InputGroup>
                                <InputLeftElement>
                                    <img src="/bnb.png" width={24} alt="" />
                                </InputLeftElement>
                                <Input variant={'outline'} rounded={10}
                                    borderColor={"rgba(255,255,255,0.4)"}
                                    onChange={e => setInput(e.target.value)}
                                    // value={input}
                                    fontSize={13}
                                    type='number'
                                >

                                </Input>
                                <InputRightElement>
                                    <Text fontSize={10} mr={23} color={"#7D8DA7"}>≈&nbsp;$0.000&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                                </InputRightElement>
                            </InputGroup>
                            <Box color={"#7D8DA7"} mt={6} mb={10} display={'flex'} justifyContent={"space-between"}>
                                <Box>Est:</Box>
                                <Box fontSize={10}>≈&nbsp;$0.000</Box>
                            </Box>
                            <Box color={"#7D8DA7"}>Listing is FREE! When the sale succeeds, the following fees will occur.</Box>
                            <Box color={"#7D8DA7"} mt={3} mb={3} display={'flex'} justifyContent={"space-between"}>
                                <Box>Marketplace Fee</Box>
                                <Box color={"white"} fontWeight={"bold"}>≈&nbsp;5%</Box>
                            </Box>
                            <Box color={"#7D8DA7"} mt={3} mb={3} display={'flex'} justifyContent={"space-between"}>
                                <Box>You will receive</Box>
                                <Box color={"white"} fontWeight={"bold"}>≈&nbsp; {input * 95 / 100} ETH</Box>
                            </Box>
                            {!isApprovedForAll ? <Button
                                mt={5}
                                mb={9}
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
                                    mt={5}
                                    mb={9}
                                    minW={"-webkit-fill-available"}
                                    rounded={12}
                                    dropShadow={'inner'}
                                    border={'black solid 2px'}
                                    boxShadow={"3px 3px white"}
                                    isDisabled={input == ""}
                                    onClick={() => { isUpdateView ? handleUpdate() : handleSell() }}
                                    style={{ background: input != "" ? 'linear-gradient(to right, #80E8DD, #D855A6)' : '' }}>
                                    <Text fontWeight={700} >{isUpdateView ? "Update" : "Sell"}</Text>
                                </Button>}
                        </ModalBody>

                    </ModalContent>
                </Modal>
            }

        </Box>
    )
}
