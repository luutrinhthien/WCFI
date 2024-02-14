import React, { useEffect, useState } from 'react'
import { Grid, GridItem, Box, Text, Button, Show } from '@chakra-ui/react'
import Image from 'next/image'
import { useMoralis, useMoralisWeb3Api } from 'react-moralis'
import { ConnectButton, WalletModal } from 'web3uikit'
import { ethers } from 'ethers'
import { getData, deleteData, saveData, updateData } from '../../utils/localStorage'

export default function ConnectWallet({ updateBalance }) {
    const { user, enableWeb3, isWeb3Enabled, account, deactivateWeb3,
        isInitialized, Moralis, isWeb3EnableLoading, chainId } = useMoralis()

    const [walletOn, setWalletOn] = useState(false)
    const [balance, setBalance] = useState()

    useEffect(() => {
        if (account) {
            const provider = new ethers.providers.Web3Provider(window.ethereum, undefined);
            const signer = provider.getSigner()
            const a = async () => {
                // const address = await signer.getAddress();
                const bal = await signer.getBalance();
                const bnbBalance = Number.parseFloat(ethers.utils.formatEther(bal))
                setBalance(bnbBalance.toFixed(3));
                // console.log(address, "-------", account)
            }
            a()
        } else {
            setBalance("0.00");
        }
    }, [account, chainId, updateBalance])

    useEffect(() => {
        if (!account) {
            // window.localStorage.removeItem("user")
            // deactivateWeb3()
            // console.log("Do nothing")
        } else {
            updateData("user", account)
            // console.log("Do something")
        }
        // console.log(account)
    }, [account])

    useEffect(() => {
        Moralis.onAccountChanged((newAccount) => {
            // console.log(`Account changed to ${newAccount}`)
            if (newAccount == null) {
                window.localStorage.removeItem("user")
                deactivateWeb3()
                console.log("Null Account found")
            }
        })
    }, [])

    useEffect(() => {
        const user = getData('user');
        if (user) {
            enableWeb3()
        }
    }, [])

    useEffect(() => {
        if (chainId != undefined) {
            if (chainId == 97) {

            } else {
                async function init() {
                    // const { web3 } = await useMoralis();
                    const provider = new ethers.providers.Web3Provider(window.ethereum, undefined);

                    const chainId = '0x61';
                    await provider.send('wallet_switchEthereumChain', [{ chainId }]);
                }
                init()
                alert("Please check metamask to switch network")
            }
        }
    }, [chainId])

    const handleCheck = () => {
        console.log(`HELLO----------${account}`)
        console.log(`isWeb3----------${isWeb3Enabled}`)
        console.log(`isInit----------${isInitialized}`)
        console.log(`balance----------${balance}`)
        // console.log(`web3ukitButton----------${ConnectButton}`)
    }

    return (
        <Box display={'flex'}>
            <Show above='md'>
                <Box mt={2} style={{ width: '34px', height: '34px' }}>
                    <Image alt={'Eth'} src={'/bnb.png'} width={48} height={48}></Image>
                </Box>
            </Show>
            <Show above='md'>
                <Box mt={2} pl={3} pr={4}>
                    <Text fontWeight={100} fontSize={10}>ETH</Text>
                    <Text fontWeight={700} fontSize={14}>{balance || "0.00"}</Text>
                </Box>
            </Show>
            <Show below='md'>
                <Box mt={2} pl={1} pr={1}>
                    <Text fontWeight={"thin"} fontSize={10}>ETH</Text>
                    <Text fontWeight={700} fontSize={14}>{balance || "0.00"}</Text>
                </Box>
            </Show>
            {!account ? (<Button
                minW={"160px"}
                rounded={12}
                dropShadow={'inner'}
                border={'black solid 2px'}
                boxShadow={"3px 3px white"}
                disabled={isWeb3EnableLoading}
                onClick={() =>
                    setWalletOn(!walletOn)
                }
                style={{ background: 'linear-gradient(to right, #80E8DD, #D855A6)' }}>
                <Text fontWeight={700} fontSize={14}>Connect Wallet</Text>
            </Button>) : (
                <Box className="rounded-xl mx-auto bg-gradient-to-r p-[2px] from-[#80E8DD] via-[#7CC2F6] to-[#D855A6]">
                    <Box className="flex flex-col justify-between h-full rounded-lg p-1" bg='#0E1114'>
                        <Button variant='unstyle' fontSize={14}>{account.slice(0, 6)}...{account.slice(account.length - 4, account.length)}</Button>
                    </Box>
                </Box>)}

            {/* <ConnectButton>Connect Wallet</ConnectButton> */}

            {walletOn && <WalletModal isOpened={true} setIsOpened={function noRefCheck() { setWalletOn(!walletOn) }} />}
            <Button hidden onClick={handleCheck} color={'black'}>Click Me</Button>
        </Box >
    )
}
