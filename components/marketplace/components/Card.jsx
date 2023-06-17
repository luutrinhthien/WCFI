import { Box, Button, Text, Grid, GridItem, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import SingleCard from './SingleCard'

export default function Card({ setApprovalForAll, isApprovedForAll, setIsApprove }) {
    const [optionTime, setOptionTime] = useState("24h")

    return (
        <Grid templateColumns='repeat(3, 1fr)'
            gap={6}>
            <GridItem colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                <SingleCard setApprovalForAll={setApprovalForAll} isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove} />
            </GridItem>
            <GridItem colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                <SingleCard setApprovalForAll={setApprovalForAll} isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove} />
            </GridItem>
            <GridItem colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                <SingleCard setApprovalForAll={setApprovalForAll} isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove} />
            </GridItem>
        </Grid>
    )
}
