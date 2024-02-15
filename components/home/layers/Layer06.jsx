import React from 'react'
import { Grid, GridItem, Box, Text, Button, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import CopyToClipboard from 'react-copy-to-clipboard'
import { useMoralis, useWeb3Contract } from 'react-moralis'

export default function Layer05() {
    const toast = useToast()
    const [referralLink, setReferralLink] = React.useState('')
    const [show, setShow] = React.useState(false)

    const { account } = useMoralis()

    React.useEffect(() => {
        setReferralLink(`${window.location.origin}?ref=${account}`);
    }, [account])

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

    return (
        <Box p={5}>
            <Text fontWeight={"extrabold"}>My Referal Link</Text>
            <Box mt={7} mb={4}>
                <Text color={"rgba(121,129,151,1)"} fontWeight={"hairline"} fontSize={10}>Invite friends to join and get up to 25% referal commision.</Text>
                <Text color={"rgba(128,232,221,1)"} fontSize={12}>Learn more</Text>
            </Box>
            {!show && <Box>
                <Box className="rounded-xl mt-10 mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='#0E1114'>
                        <Button onClick={()=>{setShow(true)}} fontSize={12} variant='unstyle'>Invite Friends</Button>
                    </Box>
                </Box>
            </Box>}

            {show && <Box bg="#0E1114" rounded="lg" color="white">
                <Box
                    rounded="md"
                    border="1px"
                    borderColor="gray.600"
                    marginTop="3"
                    cursor="pointer"
                    _hover={{ opacity: 0.8 }}
                    // onClick={notificationCopy}
                >
                    <CopyToClipboard text={referralLink} onCopy={notificationCopy}>
                        <Button w="full" bg="transparent" display="flex" justifyContent="space-between">
                            <Text>{referralLink.slice(0, 14)}...</Text>
                            <Image src="/images/icon_copy.svg" alt="" width={15} height={15} />
                        </Button>
                    </CopyToClipboard>
                </Box>
            </Box>}
        </Box>
    )
}
