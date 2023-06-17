// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis'

export function Providers({
    children
}) {
    return (
        <CacheProvider>
            <MoralisProvider initializeOnMount={false}>
                <ChakraProvider>
                    {children}
                </ChakraProvider>
            </MoralisProvider>
        </CacheProvider>
    )
}