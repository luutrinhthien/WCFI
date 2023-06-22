import { Box, Button, Text, Grid, GridItem, Select } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { abi, contractAddress, marketplaceAddress } from '../../../constants'
import { useQuery, gql } from '@apollo/client'
import { Context } from "../../../context/Context"

export default function Card({ setApprovalForAll, isApprovedForAll,
    setIsApprove, optionView, setUpdateBalance, filter, itemQuery }) {

    const { account } = useMoralis()

    // const reload = useContext(Context)
    const [reloadCards, setReloadCards] = useState(false)

    const GET_ITEM = gql`
        {
            tokens(
                where: {
                owner: "${account}"
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
    const GET_ITEM2 = gql`
        {
            tokens(
                where: {
                owner: "${marketplaceAddress}",
                creator: "${account}",
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
    query GetItems($account: String!, $itemQuery: [String!]!) {
        tokens(
          where: {
            owner: $account,
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

    const { loading: loading3, data: dataFilter, refetch: refetchFilter } = useQuery(GET_ITEM_FILTER, {
        variables: { account, itemQuery },
    })

    const { loading, error, data, refetch } = useQuery(GET_ITEM, {
        variables: reloadCards,
    })

    const { loading: loading2, error: error2, data: data2, refetch: refetch2 } = useQuery(GET_ITEM2, {
        variables: reloadCards,
    })

    useEffect(() => {
        refetch(reloadCards);
    }, [reloadCards, refetch]);

    useEffect(() => {
        refetch2(reloadCards);
    }, [reloadCards, refetch2, itemQuery]);

    console.log("dataFilter: ", dataFilter)
    console.log("loading: ", loading3)

    if (loading && loading3) {
        return <Text fontSize={22}>Loading...</Text>;
    } else
        return (
            <>
                <Grid templateColumns='repeat(3, 1fr)'
                    gap={6}>
                    {(!dataFilter || dataFilter.tokens.length == 0) && data && optionView === "myAsset" && data.tokens.map((item) =>
                        <GridItem key={item.id} colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                            <SingleCard setReloadCards={setReloadCards} setUpdateBalance={setUpdateBalance}
                                price={undefined} tokenId={item.tokenId} country={item.country} setApprovalForAll={setApprovalForAll} isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove} />
                        </GridItem>
                    )}
                    {dataFilter && dataFilter.tokens.length != 0 && optionView === "myAsset" && dataFilter.tokens.map((item) =>
                        <GridItem key={item.id} colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                            <SingleCard setReloadCards={setReloadCards} setUpdateBalance={setUpdateBalance}
                                price={undefined} tokenId={item.tokenId} country={item.country} setApprovalForAll={setApprovalForAll} isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove} />
                        </GridItem>
                    )}
                    {data2 && optionView === "listing" && data2.tokens.map((item) =>
                        <GridItem key={item.id} colSpan={{ base: 3, sm: 3, md: 1, lg: 1, xl: 1, "2xl": 1 }} bg='#0E1114' borderRadius={10}>
                            <SingleCard setReloadCards={setReloadCards} setUpdateBalance={setUpdateBalance}
                                price={item.price} optionView={optionView} tokenId={item.tokenId} country={item.country} setApprovalForAll={setApprovalForAll} isApprovedForAll={isApprovedForAll} setIsApprove={setIsApprove} />
                        </GridItem>
                    )}
                </Grid>
            </>
        )
}
