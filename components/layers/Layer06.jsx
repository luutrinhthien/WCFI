import React from 'react'
import { Grid, GridItem, Box, Text, Button } from '@chakra-ui/react'
import Image from 'next/image'

export default function Layer05() {
    return (
        <Box p={5}>
            <Text fontWeight={"extrabold"}>My Referal Link</Text>
            <Box mt={5} mb={4}>
                <Text fontWeight={"hairline"} fontSize={13}>Invite friends to join and get up to 25% referal commision.</Text>
                <Text color={"rgba(128,232,221,1)"} fontSize={13}>Learn more</Text>
            </Box>
            <Box>
                <div className="rounded-xl mt-10 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='#0E1114'>
                        <Button variant='unstyle'>Invite Friends</Button>
                    </Box>
                </div>
            </Box>
        </Box>
    )
}
