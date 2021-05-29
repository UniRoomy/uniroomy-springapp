import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../reducers";
import { increment, decrement } from "../actions";

interface Props {}

export default function WebWrapper({}: Props) {
  const counter = useSelector((state: webState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>LANDING PAGE</h1>
      <h4>{"Counter: " + counter}</h4>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
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
