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
                        <FlagAndRate name="Denmark" flag="denmark" minted="1,879" rarity="1.86" price="4,292" />
                        <FlagAndRate name="Slovakia" flag="slovakia" minted="1,879" rarity="1.86" price="4,292" />
                        <FlagAndRate name="Czech Republic" flag="czech" minted="2,818" rarity="2.80" price="2,862" />
                        <FlagAndRate name="Germany" flag="germany" minted="2,818" rarity="2.80" price="2,146" />
                        <FlagAndRate name="Scotland" flag="scotland" minted="3,758" rarity="3.73" price="2,146" />
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 8, sm: 8, md: 4, lg: 4, xl: 4, "2xl": 4 }} bg='#0E1114' borderRadius={10}>
                    <Box p={6}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={600} fontSize={20} color={'#B6BFCD'}>Tier 4</Text>
                            <Text fontWeight={200} >Rarity</Text>
                        </Box>
                        <FlagAndRate name="Albania" flag="albania" minted="4,698" rarity="4.66" price="1,716" />
                        <FlagAndRate name="Serbia" flag="serbia" minted="4,698" rarity="4.66" price="1,716" />
                        <FlagAndRate name="Slovenia" flag="slovenia" minted="5,637" rarity="5.59" price="1,431" />
                    </Box>
                </GridItem>

            </Grid>
        </Box>
    )
}
