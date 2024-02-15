/* eslint-disable @next/next/no-img-element */
import axios from 'axios'
import { useMoralis, useWeb3Contract } from 'react-moralis'
import { Box, Image, Text, GridItem, Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { handleNewNotiWating, handleNewNotiSuccess } from "../../../utils/notification/Notification"
import { WalletModal, useNotification } from 'web3uikit'

const MyReferralSidebar = ({ address, totalReward, totalClaim, refList, claimReward, setReload }) => {
  const { account } = useMoralis()
  const toast = useToast()
  const [data, setData] = useState(null)
  const [referralLink, setReferralLink] = useState('')
  const [loading, setLoading] = useState(false)
  const enableWithdraw = false

  const dispatch = useNotification()
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (account) {
  //       const params = { address: account }

  //       try {
  //         // const res = await axios.get('/refs/commission', { params })
  //         // setData(getResponseData(res))
  //       } catch (err) {
  //         console.log('Error: ', err)
  //       }
  //     }
  //   }

  //   fetchData()
  // }, [account])

  const notificationCopy = async () => {
    toast({
      title: 'Link Copied!',
      style: {
        background: '#191D24',
        borderRadius: '12px',
      },
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  useEffect(() => {
    setReferralLink(`${window.location.origin}?ref=${account}`);
  }, [account])

  const handleClaim = async () => {
    try {
        await claimReward({
          onSuccess: handleSuccess,
          onError: (error) => console.log("e: ", error),
        })
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const handleSuccess = async (tx) => {
    setLoading(true)

    await tx.wait(1)
    setLoading(false)
    handleNewNotiSuccess(dispatch, {hash:'Success!'})
    setReload(prev=>!prev)
}

  return (
    <Box lg={{ base: "full", md: "5/12" }} display="flex" flexDirection="column" gap={5}>
      <Box bg="#0E1114" p={5} rounded="lg" color="white">
        <Text fontSize="lg">My Referral Link</Text>
        <Box
          rounded="md"
          border="1px"
          borderColor="gray.600"
          marginTop="3"
          cursor="pointer"
          _hover={{ opacity: 0.8 }}
          onClick={notificationCopy}
        >
          <CopyToClipboard text={referralLink} onCopy={notificationCopy}>
            <Button w="full" bg="transparent" display="flex" justifyContent="space-between">
              <Text>{referralLink.slice(0, 15)}...</Text>
              <Image src="/images/icon_copy.svg" alt="" w={5} h={5} />
            </Button>
          </CopyToClipboard>
        </Box>
      </Box>

      <Box bg="#0E1114" p={5} rounded="lg" color="rgb(99 117 146)">
        <Box>
          <Text fontSize="lg" fontWeight="bold">Total Friends</Text>
          <Text mt={3} color="white" fontWeight="bold" display="flex" alignItems="center" gap={2}>
            <Image src="/images/group_users.svg" alt="" w={6} h={6} />
            {refList ? refList.length : 0}
          </Text>
        </Box>

        <Box mt={5} display="flex" flexDirection={{ base: "row", lg: "row" }} gap={5}>
          <Box flex="1">
            <Text fontSize="lg" fontWeight="bold">Total Earned</Text>
            <Text mt={3} color="white" fontWeight="bold" display="flex" alignItems="center" gap={2}>
              <Image src="/bnb.png" alt="" w={6} h={6} />
              {(totalClaim && parseFloat((totalClaim / 10 ** 18).toString())) || 0}
            </Text>
          </Box>
          <Box flex="1">
            <Text fontSize="lg" fontWeight="bold">Available to claim</Text>
            <Text mt={3} color="white" fontWeight="bold" display="flex" alignItems="center" gap={2}>
              <Image src="/bnb.png" alt="" w={6} h={6} />
              {(totalReward && 
              (parseFloat((totalReward / 10 ** 18).toString())-parseFloat((totalClaim / 10 ** 18).toString())).toFixed(6).toString() 
              != '0.000000' 
              && 
              (parseFloat((totalReward / 10 ** 18).toString())-parseFloat((totalClaim / 10 ** 18).toString())).toFixed(6).toString())
              || 0}
            </Text>
          </Box>

          {/* <Box bg="#191D24" fontWeight={400} rounded="lg" p={3} flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Text>Available to Withdraw on</Text>
          <Text mt={1} fontWeight="bold">25/12/2024</Text>
        </Box> */}
        </Box>

        {(totalReward && parseFloat((totalReward / 10 ** 18)))-(totalClaim && parseFloat((totalClaim / 10 ** 18))) ? (
          (!loading?<Button bg="#191D24" mt={5} py={2} fontSize="lg" w="full" onClick={handleClaim}>Withdraw</Button>
          :
          <Box bg="#191D24" mt={5} py={3} fontSize="lg" rounded="lg" display="flex" alignItems="center" justifyContent="center" color="rgb(99 117 146)">
            Loading...
          </Box>)
        ) : (
          <Box bg="#191D24" mt={5} py={3} fontSize="lg" rounded="lg" display="flex" alignItems="center" justifyContent="center" color="rgb(99 117 146)">Withdraw</Box>
        )}
      </Box>
    </Box>
  )
}

export default MyReferralSidebar
