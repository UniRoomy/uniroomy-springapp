import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import Index from "../pages/index";

test("render index page", () => {
  render(<Index />);

  const linkElement = screen.getByText("Placeholder");
  expect(linkElement).toBeInTheDocument();
});


