import { Box, Button, Text, Grid, GridItem, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { abi, contractAddress, marketplaceAddress } from '../../../constants'
import { useQuery, gql } from '@apollo/client'

export default function Card({ setApprovalForAll, isApprovedForAll, setIsApprove, assetArr }) {

    const [tokenURIResult, setTokenURIResult] = useState()
    const [params, setParams] = useState()

    const { runContractFunction: tokenURI } = useWeb3Contract({
        abi: abi,
        contractAddress: contractAddress, // specify the networkId
        functionName: "tokenURI",
        params: { tokenId: params },
    })

    const GET_ITEM = gql`
        {
            tokens(first: 15) {
              id
              tokenId
              owner
              creator
              price
              country
            }
          }
    `
    const { loading, error, data } = useQuery(GET_ITEM)
    console.log(data)

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
