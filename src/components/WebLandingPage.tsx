import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

export default function WebLandingPage({}: Props) {
  return (
    <div>
      <h1>LANDING PAGE</h1>
    </div>
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
