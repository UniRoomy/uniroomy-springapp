import React from "react";
import Meta from "../src/components/Meta";
import WebWrapper from "../src/components/WebWrapper";

interface Props {}

export default function index({}: Props) {
  return (
    <>
      <Meta />
      <WebWrapper />
    </>
  );
}
