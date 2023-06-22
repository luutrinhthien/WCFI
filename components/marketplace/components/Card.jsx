import {
    Box, Button, Text, Grid, GridItem, Select,
    Input, InputGroup, InputRightElement, InputLeftElement
} from '@chakra-ui/react'
import React, { useState, useEffect, useContext } from 'react'
import SingleCard from './SingleCard'
import { useQuery, gql } from '@apollo/client'
import { marketplaceAddress, marketplaceAbi } from '../../../constants'
import { Context } from "../../../context/Context"

export default function Card({ setApprovalForAll, isApprovedForAll, setIsApprove
    , setUpdateBalance, itemQuery }) {

    const [optionTime, setOptionTime] = useState("24h")

    const [reloadCards, setReloadCards] = useState(false)

    const GET_ITEM = gql`
        {
            tokens(
                where: {
                owner: "${marketplaceAddress}"
                }
                orderBy: id
                orderDirection: desc  
            ) {
                id
                tokenId
                owner
                creator
                price
                country
              }
        }
    `
    const GET_ITEM_FILTER = gql`
    query GetItems($marketplaceAddress: String!, $itemQuery: [String!]!) {
        tokens(
          where: {
            owner: $marketplaceAddress,
            country_in: $itemQuery
          }
          orderBy: "id"
          orderDirection: desc
        ) {
          id
          tokenId
          owner
          creator
          price
          country
        }
      }
    `
    // console.log(reloadCards)

    const { loading: loading3, data: dataFilter, refetch: refetchFilter } = useQuery(GET_ITEM_FILTER, {
        variables: { marketplaceAddress, itemQuery },
    })

    const { loading, error, data, refetch } = useQuery(GET_ITEM, {
        variables: reloadCards,
    })

    useEffect(() => {
        refetch(reloadCards);
    }, [reloadCards, refetch]);

    // console.log(data?.tokens)
    if (loading || loading3) {
        return <Text fontSize={20}>Loading...</Text>;
    } else
        return (
            <>
                <Grid templateColumns='repeat(3, 1fr)'
                    gap={6}>
                    {(!dataFilter || dataFilter.tokens.length == 0) && data && data.tokens.map((item) =>
                        <GridItem key={item.id} colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                            <SingleCard price={item.price} tokenId={item.tokenId}
                                country={item.country} setApprovalForAll={setApprovalForAll}
                                isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove}
                                setUpdateBalance={setUpdateBalance} setReloadCards={setReloadCards} />
                        </GridItem>
                    )}
                    {dataFilter && dataFilter.tokens.length != 0 && dataFilter.tokens.map((item) =>
                        <GridItem key={item.id} colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                            <SingleCard price={item.price} tokenId={item.tokenId}
                                country={item.country} setApprovalForAll={setApprovalForAll}
                                isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove}
                                setUpdateBalance={setUpdateBalance} setReloadCards={setReloadCards} />
                        </GridItem>
                    )}
                </Grid>
                <Box className="rounded-xl mt-10 mb-10 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]" width={{ base: "20%", sm: "35%", md: "20%", lg: "20%", xl: "20%" }}>
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='black'>
                        <Button fontSize={12} variant='unstyle'>Load more</Button>
                    </Box>
                </Box>
            </>
        )
}
