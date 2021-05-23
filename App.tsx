import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { mobileReducers } from "./src/reducers";
import MobileWrapper from "./src/components/MobileWrapper";

let store = createStore(mobileReducers);

export default function App() {
  return (
    <Provider store={store}>
      <MobileWrapper />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});
