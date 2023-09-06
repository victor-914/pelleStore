import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Layout from "../layouts/Layout";
import store, { persistor } from "../state/store";
import 'react-toastify/dist/ReactToastify.css';

import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { hydrateRoot } from "react-dom";




function MyApp({ Component, pageProps }) {
 

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Viola Pelle</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="En" />
      </Helmet>
      <Provider store={store} >
        <ThemeProvider theme={theme}>
          <Layout>
            <ToastContainer/>
            <CssBaseline />
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps}  />
            </PersistGate>
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;


