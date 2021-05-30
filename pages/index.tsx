import React from "react";
import Meta from "../src/components/Meta";
import WebLandingPage from "../src/components/WebLandingPage";

interface Props {}

export default function index({}: Props) {
  return (
    <>
      <Meta />
      <WebLandingPage />
    </>
  );
}
