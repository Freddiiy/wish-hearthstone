import type { AppProps } from "next/app";
import { ChakraProvider, LightMode } from "@chakra-ui/react";
import theme from "../util/themes/theme";
import "@fontsource/open-sans/400.css";
import "@fontsource/inter";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <LightMode>
        <Component {...pageProps} />
      </LightMode>
    </ChakraProvider>
  );
}

export default MyApp;
