import React from "react";
import {} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import type { mobileState } from "../reducers";
import { increment, decrement } from "../actions";

interface Props {}

export default function WebWrapper({}: Props) {
  const counter = useSelector((state: mobileState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Placeholder</h1>
      <h4>{"Counter: " + counter}</h4>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
