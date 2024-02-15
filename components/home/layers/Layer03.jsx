import React from 'react'
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'
import FlagAndRate from './flagAndRate'

export default function Layer03() {
    return (
        <Box>
            <Grid templateColumns='repeat(8, 1fr)'
                gap={6}
            >
                <GridItem colSpan={{ base: 8, sm: 8, md: 4, lg: 4, xl: 4, "2xl": 4 }} bg='#0E1114' borderRadius={10}>
                    <Box p={6}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={700} fontSize={20} style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Tier 1</Text>
                            <Text fontWeight={200} >Rarity</Text>
                        </Box>
                        <FlagAndRate name="France" flag="france" minted="104" rarity="0.10" price="77.538" />
                        <FlagAndRate name="England" flag="england" minted="112" rarity="0.11" price="72.000" />
                        <FlagAndRate name="Spain" flag="spain" minted="104" rarity="0.14" price="57.600" />
                        <FlagAndRate name="Turkey" flag="turkey" minted="118" rarity="0.19" price="42,894" />
                        <FlagAndRate name="Belgium" flag="belgium" minted="226" rarity="0.22" price="35,681" />
                        <FlagAndRate name="Portugal" flag="portugal" minted="226" rarity="0.22" price="35,681" />
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 8, sm: 8, md: 4, lg: 4, xl: 4, "2xl": 4 }} bg='#0E1114' borderRadius={10}>
                    <Box p={6}>
                        <Box display={'flex'} justifyContent={'space-between'}>
                            <Text fontWeight={600} fontSize={20} color={'#FFC71F'}>Tier 2</Text>
                            <Text fontWeight={200} >Rarity</Text>
                        </Box>
                        <FlagAndRate name="Netherlands" flag="netherlands" minted="264" rarity="0.26" price="30,545" />
                        <FlagAndRate name="Austria" flag="austria" minted="526" rarity="0.52" price="15,331" />
                        <FlagAndRate name="Croatia" flag="croatia" minted="658" rarity="0.65" price="12,255" />
                        <FlagAndRate name="Italy" flag="italy" minted="940" rarity="0.93" price="8,579" />
                        <FlagAndRate name="Romania" flag="romania" minted="1,221" rarity="1.21" price="6,604" />
                        <FlagAndRate name="Hungary" flag="hungary" minted="1,221" rarity="1.21" price="6,604" />
                    </Box>
                </GridItem>

            </Grid>
        </Box>
    )
}
