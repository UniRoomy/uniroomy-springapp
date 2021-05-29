import * as React from "react";
import { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { webReducers } from "../src/reducers";
import "../src/styles/web/globals.css";

let store = createStore(webReducers);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout children={<Component {...pageProps} />} />
    </Provider>
  );
}

export default MyApp;
