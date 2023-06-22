import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Image from 'next/image'
import { useMoralis, useWeb3Contract, useMoralisWeb3Api } from 'react-moralis'
import { WalletModal } from 'web3uikit'
import { contractAddress, abi } from '../../../../constants'
import { useNotification } from "web3uikit"
import { ethers } from 'ethers'
import country from '../../../../utils/metadata'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure
} from '@chakra-ui/react'

// console.log("HELLO FROM IMAGE", `${country.uruguay.attributes[2].value}`)

export default function MintResultModal({ isOpen, onClose, setData, setShowResult, data, transactionHash }) {

    const { user, enableWeb3, isWeb3Enabled, account, isWeb3EnableLoading } = useMoralis()

    // const data2 = "usa";

    return (
        <Modal motionPreset='slideInBottom' isOpen={isOpen} onClose={() => { onClose(); setData(""); setShowResult(false) }} className='transparent-div'>
            <ModalOverlay backgroundColor={"rgba(25, 29, 36, 0.64)"} backdropFilter={"blur(5px)"} />
            <ModalHeader>
                {/* <Image alt={'championship'} src={'/images/championship.png'} width={600} height={370}></Image> */}
            </ModalHeader>
            <ModalContent rounded={"xl"} backgroundColor={"transparent"}>
                {/* <ModalHeader backgroundColor={"#0E1114"} pt={10}></ModalHeader> */}
                <Box className="rounded-xl mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]" mt={6} w={"full"}>
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='#0E1114'>
                        <ModalBody pt={4} rounded={"xl"} backgroundColor={"#0E1114"} pb={4} position={"relative"} color={"white"}>
                            <img style={{ display: "block", margin: "auto" }} alt={'shoes'} src={`${country[data]?.image || country.serbia.image}`} width={330} height={400}></img>
                            <Grid templateColumns='repeat(2, 1fr)'>
                                <GridItem colSpan={1}>
                                    <Text fontSize={14} mt={1} color={"rgba(41,49,61,1)"}>Team</Text>
                                    <Text fontSize={14} mt={1}>{country[data]?.name || ""}</Text>
                                    <Text fontSize={14} mt={4} pt={4} borderTop={"1px solid rgba(41,49,61,1)"} color={"rgba(41,49,61,1)"}>Estimate</Text>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Text fontSize={14} mt={1} color={"rgba(41,49,61,1)"}>Rarity</Text>
                                    <Text fontSize={14} mt={1} >{country[data]?.attributes[2].value || ""}%</Text>
                                    <Text fontSize={14} mt={4} pt={4} borderTop={"1px solid rgba(41,49,61,1)"}>≈$68,000</Text>
                                </GridItem>
                            </Grid>
                        </ModalBody>
                    </Box>
                </Box>

                <Button
                    mt={4}
                    minW={"-webkit-fill-available"}
                    rounded={"xl"}
                    dropShadow={'inner'}
                    border={'black solid 2px'}
                    boxShadow={"3px 3px white"}
                    disabled={isWeb3EnableLoading}
                    onClick={() => { onClose(); setData(""); setShowResult(false) }}
                    p={6}
                    style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}>
                    <Text fontWeight={700} fontSize={14} color={"white"} >Collect</Text>
                </Button>

                <Box className="rounded-xl mt-4 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]" mt={5} w={"full"}>
                    <Box className="flex flex-col justify-between h-full rounded-xl p-1" bg='#0E1114'>
                        <Button onClick={() => { window.open(`https://testnet.bscscan.com/tx/${transactionHash}`, '_blank') }} variant='unstyle' color={"white"} p={5} fontWeight={700} fontSize={14} >View on BSCscan</Button>
                    </Box>
                </Box>
            </ModalContent>
        </Modal>

    )
}
