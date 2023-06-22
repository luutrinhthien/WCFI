import { Grid, GridItem, Box, Text, Show, Hide } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { contractAddress } from '../../../constants'

export default function Layer01() {
    return (
        <Grid templateColumns='repeat(6, 1fr)'
            gap={0}
        >
            <Show above='lg'>
                <GridItem colSpan={4} bg='#0E1114' borderLeftRadius={10}>
                    <Box p={6} pl={12}>
                        <Box fontSize={12} fontWeight={200} color={"rgba(121,129,151,1)"}>Total Reward</Box>
                        <Box fontSize={28} fontWeight={700}>$ 8.064.000</Box>
                        <Box fontSize={12} onClick={() => { window.open(`https://testnet.bscscan.com/address/${contractAddress}`, '_blank') }} width={"fit-content"} style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            <Link href="" >
                                View Contract
                            </Link>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} bg='#0E1114' borderRightRadius={10}>
                    <Box p={6}>
                        <Box fontSize={12} fontWeight={200} color={"rgba(121,129,151,1)"}>Participant</Box>
                        <Box fontSize={28} fontWeight={700}>40.320</Box>
                    </Box>
                </GridItem>
            </Show>

            <Hide above='lg'>
                <GridItem colSpan={6} bg='#0E1114' borderTopRadius={10}>
                    <Box p={6} pl={12}>
                        <Box fontSize={12} fontWeight={200} color={"rgba(121,129,151,1)"}>Total Reward</Box>
                        <Box fontSize={28} fontWeight={700}>$ 8.064.000</Box>
                        <Box width={"fit-content"} style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            <Link href="/" >
                                View Contract
                            </Link>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={6} bg='#0E1114' borderBottomRadius={10}>
                    <Box p={6} pl={12}>
                        <Box fontSize={12} fontWeight={200} color={"rgba(121,129,151,1)"}>Participant</Box>
                        <Box fontSize={28} fontWeight={700}>40.320</Box>
                    </Box>
                </GridItem>
            </Hide>
        </Grid >
    )
}
