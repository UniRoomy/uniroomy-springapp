import * as React from "react";
import { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import "../src/styles/web/globals.css";
// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import { webReducers } from "../src/reducers";
// redux-persist
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-community/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userData", "userStatus"],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, webReducers);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout children={<Component {...pageProps} />} />
      </PersistGate>
    </Provider>
  );
}

// import * as React from "react";
// import { AppProps } from "next/app";
// import Layout from "../src/components/Layout";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { webReducers } from "../src/reducers";
// import "../src/styles/web/globals.css";

// let store = createStore(webReducers);

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <Provider store={store}>
//       <Layout children={<Component {...pageProps} />} />
//     </Provider>
//   );
// }

export default MyApp;
