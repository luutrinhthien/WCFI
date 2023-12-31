import { Grid, GridItem, Box, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function flagAndRate({ flag, name, minted, rarity, price }) {
    return (
        <Box mt={6} display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'}>
                <Image alt={`flag-${flag}`} src={`/flags/${flag}.png`} height={34} width={45}></Image>
                <Box pl={3}>
                    <Text fontWeight={700} fontSize={14}>{name}</Text>
                    <Text fontWeight={200} fontSize={9} color={"rgba(121,129,151,1)"}>Minted:{minted}</Text>
                </Box>
            </Box>
            <Box>
                <Text fontWeight={700} fontSize={14}>{rarity}%</Text>
                <Text fontSize={9} fontWeight={200} color={"rgba(121,129,151,1)"}>≈ ${price}</Text>
            </Box>
        </Box>
    )
}
