import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Head from "next/head";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.studio.thegraph.com/query/65735/blast/v0.0.1"
})

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Head>
                <title>WCFI</title>
                <meta name="description" content="WFCI" />
                <link href="https://api.fontshare.com/v2/css?f%5B%5D=panchang@700&display=swap" rel="stylesheet"></link>
            </Head>
            <MoralisProvider initializeOnMount={false}>
                <ApolloProvider client={client}>
                    <NotificationProvider>
                        <ChakraProvider>
                            <Component {...pageProps} />
                        </ChakraProvider>
                    </NotificationProvider>
                </ApolloProvider>
            </MoralisProvider>
        </div>
    );
}

export default MyApp;