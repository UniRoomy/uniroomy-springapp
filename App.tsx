import React from "react";
// import { StyleSheet, Text, View } from "react-native";
import MobileWrapper from "./src/components/MobileWrapper";

export default function App() {
  return (
    <>
      <MobileWrapper />
    </>
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
