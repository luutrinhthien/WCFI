import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Head from "next/head";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.studio.thegraph.com/query/48196/wcfi-marketplace/v0.0.2"
})

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

    return (
        <div>
            <Head>
                <title>WCFI</title>
                <meta name="description" content="WFCI" />
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