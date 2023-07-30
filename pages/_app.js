import "../styles/globals.css";
import Head from "next/head";
import { Helmet } from "react-helmet";
// import Nav from "../components/navBar/Nav";
// import SpecimenProvider, { SpecimenContext } from "../context/contextProvider";
// import { ToastContainer } from "react-toastify";
import React from "react";
// import "./index.css";
// import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../state/index";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
  return (
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
      </Head>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Viola Pelle</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="En" />
      </Helmet>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
