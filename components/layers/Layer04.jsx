import React from 'react'
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import FlagAndRate from './flagAndRate'

export default function Layer04() {
    return (
        <Box>
            <Grid templateColumns='repeat(8, 1fr)'
                gap={6}
            >
                <GridItem colSpan={{ base: 8, sm: 8, md: 4, lg: 4, xl: 4, "2xl": 4 }} bg='#0E1114' borderRadius={10}>
                    <Box p={6}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={600} fontSize={20} color={'#027EF2'}>Tier 3</Text>
                            <Text fontWeight={200} >Rarity</Text>
                        </Box>
                        <FlagAndRate name="Switzerland" flag="switzerland" minted="84" rarity="0.08" price="96.000" />
                        <FlagAndRate name="Mexico" flag="mexico" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Wales" flag="wales" minted="112" rarity="0.11" price="72.000" />
                        <FlagAndRate name="Ghana" flag="ghana" minted="104" rarity="0.14" price="57.600" />
                        <FlagAndRate name="Ecuador" flag="ecuador" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Moroco" flag="morocco" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Cameroon" flag="cameroon" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Canada" flag="canada" minted="104" rarity="0.10" price="77.538" />
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 8, sm: 8, md: 4, lg: 4, xl: 4, "2xl": 4 }} bg='#0E1114' borderRadius={10}>
                    <Box p={6}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={600} fontSize={20} color={'#B6BFCD'}>Tier 4</Text>
                            <Text fontWeight={200} >Rarity</Text>
                        </Box>
                        <FlagAndRate name="Japan" flag="japan" minted="84" rarity="0.08" price="96.000" />
                        <FlagAndRate name="Qatar" flag="qatar" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Tunisia" flag="tunisia" minted="112" rarity="0.11" price="72.000" />
                        <FlagAndRate name="South Korea" flag="korea" minted="104" rarity="0.14" price="57.600" />
                        <FlagAndRate name="Australia" flag="australia" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Iran" flag="iran" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Saudi Arabia" flag="saudi arabia" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="Costa Rica" flag="costarica" minted="104" rarity="0.10" price="77.538" />
                    </Box>
                </GridItem>

            </Grid>
        </Box>
    )
}
