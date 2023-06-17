import { Box, Button, Text, Grid, GridItem, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { useMoralis, useWeb3Contract } from 'react-moralis'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure
} from '@chakra-ui/react'

export default function SingleCard({ setApprovalForAll, isApprovedForAll, setIsApprove }) {
    const { user, enableWeb3, isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis()

    const [optionTime, setOptionTime] = useState("24h")

    const { isOpen, onClose, onOpen } = useDisclosure()

    // console.log("CHECKKKKK AT CARD ===== ", isApprovedForAll)

    const handleApprove = async () => {
        await setApprovalForAll()
        setIsApprove((prev) => !prev)
    }

    const handeBuy = () => {

    }

    return (
        <Box>
            <Box onClick={onOpen}>
                <Box className="rounded-lg mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]" onClick={onOpen}>
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='black'>
                        <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={"https://ipfs.io/ipfs/Qmd5rHRVP2pngQnn5ednAyfkZwYjZ9pVwjPVf6SurvyGAv/Tier1/Brazil.png"} width={330} height={400}></img>

                        <Box p={4} background={"#0E1114"}>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem colSpan={1}>
                                    <Text mt={1} color={"rgba(41,49,61,1)"}>Team</Text>
                                    <Text mt={1} color={"white"}>Brazil</Text>
                                    <Box mt={4} pt={4} borderTop={"1px solid rgba(41,49,61,1)"} color={"rgba(41,49,61,1)"}>Estimate</Box>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Text mt={1} color={"rgba(41,49,61,1)"}>Rarity</Text>
                                    <Text mt={1} color={"white"}>{0.91}%</Text>
                                    <Box mt={4} color={"white"} pt={4} borderTop={"1px solid rgba(41,49,61,1)"}>≈$68,000</Box>
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
                        <Button color={"white"} variant={"unstyled"} onClick={onClose}>&times;</Button>
                    </ModalHeader>

                    <ModalBody p={10} pl={2} w={{ base: "auto", sm: "auto", md: "130%", lg: "130%", xl: "130%", "2xl": "130%" }} pt={4} rounded={"xl"} backgroundColor={"#0E1114"} pb={4} color={"white"}>
                        <Grid templateColumns='repeat(2, 1fr)'>
                            <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }}>
                                <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={"https://ipfs.io/ipfs/Qmd5rHRVP2pngQnn5ednAyfkZwYjZ9pVwjPVf6SurvyGAv/Tier1/Brazil.png"} width={330} height={400}></img>
                            </GridItem>
                            <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1, "2xl": 1 }} ml={3}>
                                <Box fontSize={20} fontWeight={"semibold"}>
                                    <a
                                        className="bg-gradient-to-r from-teal-200 via-cyan-300 
                                    via-purple-400 to-pink-400 text-transparent 
                                        bg-clip-text "
                                    >
                                        Tier 1
                                    </a>
                                </Box>
                                <Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text mt={1} color={"rgba(41,49,61,1)"}>Team</Text>
                                        <Box fontWeight={"semibold"}>Brazil</Box>
                                    </Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text mt={1} color={"rgba(41,49,61,1)"}>Rarity</Text>
                                        <Box fontWeight={"semibold"}>0,08%</Box>
                                    </Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text mt={1} color={"rgba(41,49,61,1)"}>ID</Text>
                                        <Box fontWeight={"semibold"}>#290987</Box>
                                    </Box>
                                    <Box mt={1} display={"flex"} justifyContent={"space-between"}>
                                        <Text mt={1} color={"rgba(41,49,61,1)"}>Price</Text>
                                        <Box fontWeight={"semibold"}>68,000</Box>
                                    </Box>
                                </Box>
                                {!isApprovedForAll ? <Button
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
                                        onClick={handeBuy}
                                        style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}>
                                        <Text fontWeight={700} >Buy</Text>
                                    </Button>}
                            </GridItem>
                        </Grid>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </Box>
    )
}
