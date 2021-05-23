import React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { webReducers } from "../src/reducers";
import WebWrapper from "../src/components/WebWrapper";
import { useSelector, useDispatch } from "react-redux";
import type { webState } from "../src/reducers";
import { increment, decrement } from "../src/actions";

let store = createStore(webReducers);

interface Props {}

export default function index({}: Props) {
  return (
    <Provider store={store}>
      <WebWrapper />
    </Provider>
  );
}
