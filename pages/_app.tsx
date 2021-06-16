import * as React from "react";
import { AppProps } from "next/app";
import Layout from "../src/components/Layout";
import "../src/styles/web/globals.css";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { webReducers } from "../src/reducers";
// redux-persist
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

// Logger
const devMiddleware = [];
const middleware = [];
if (process.env.NODE_ENV === "development") {
  devMiddleware.push(logger);
}
middleware.push(thunk);

const persistedReducer = persistReducer(persistConfig, webReducers);
const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware.concat(devMiddleware))
);

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout children={<Component {...pageProps} />} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
