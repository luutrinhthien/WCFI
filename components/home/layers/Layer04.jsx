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
                        <FlagAndRate name="Switzerland" flag="switzerland" minted="1,503" rarity="1.49" price="5,365" />
                        <FlagAndRate name="Mexico" flag="mexico" minted="1,879" rarity="1.86" price="4,292" />
                        <FlagAndRate name="Wales" flag="wales" minted="1,879" rarity="1.86" price="4,292" />
                        <FlagAndRate name="Ghana" flag="ghana" minted="2,818" rarity="2.80" price="2,862" />
                        <FlagAndRate name="Ecuador" flag="ecuador" minted="2,818" rarity="2.80" price="2,146" />
                        <FlagAndRate name="Moroco" flag="morocco" minted="3,758" rarity="3.73" price="2,146" />
                        <FlagAndRate name="Cameroon" flag="cameroon" minted="4,698" rarity="4.66" price="1,716" />
                        <FlagAndRate name="Canada" flag="canada" minted="4,698" rarity="4.66" price="1,716" />
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 8, sm: 8, md: 4, lg: 4, xl: 4, "2xl": 4 }} bg='#0E1114' borderRadius={10}>
                    <Box p={6}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={600} fontSize={20} color={'#B6BFCD'}>Tier 4</Text>
                            <Text fontWeight={200} >Rarity</Text>
                        </Box>
                        <FlagAndRate name="Japan" flag="japan" minted="4,698" rarity="4.66" price="1,716" />
                        <FlagAndRate name="Qatar" flag="qatar" minted="4,698" rarity="4.66" price="1,716" />
                        <FlagAndRate name="Tunisia" flag="tunisia" minted="5,637" rarity="5.59" price="1,431" />
                        <FlagAndRate name="South Korea" flag="korea" minted="7,516" rarity="7.46" price="1,073" />
                        <FlagAndRate name="Australia" flag="australia" minted="7,516" rarity="7.46" price="1,073" />
                        <FlagAndRate name="Iran" flag="iran" minted="9,395" rarity="9.32" price="858" />
                        <FlagAndRate name="Saudi Arabia" flag="saudiArabia" minted="9,395" rarity="9.32" price="858" />
                        <FlagAndRate name="Costa Rica" flag="costaRica" minted="18,790" rarity="18.64" price="429" />
                    </Box>
                </GridItem>

            </Grid>
        </Box>
    )
}
