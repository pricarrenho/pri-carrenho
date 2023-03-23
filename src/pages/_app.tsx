import { GlobalStyle } from "@/styles/globals";
import { themeBlack } from "@/styles/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeBlack}>
      <Head>
        <title>Priscilla Carrenho</title>
        <meta name="theme-color" content="#13131a" />
        <meta
          name="description"
          content="Priscilla Carrenho desenvolvedora Front End - Site portfólio"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
