import React, {useEffect, useState} from "react";
import type {AppProps} from "next/app";
import {ChakraProvider, LightMode} from "@chakra-ui/react";
import theme from "../util/themes/theme";
import "@fontsource/open-sans/400.css";
import "@fontsource/inter";
import {
    IHearthstoneCard,
} from "../util/themes/types/hearthstone.t";
import axios from "axios";
import AppShell from "../components/AppShell/Appshell";

function MyApp({Component, pageProps}: AppProps) {
    const [hearthstoneCards, setHearthstoneCards] =
        useState<IHearthstoneCard[]>();

    return (
        <ChakraProvider theme={theme}>
            <LightMode>
                <AppShell>

                    <Component {...pageProps} />
                </AppShell>
            </LightMode>
        </ChakraProvider>
    );
}

export default MyApp;
