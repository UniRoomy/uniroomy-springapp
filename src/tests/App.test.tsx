import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import App from "../../App";

// jest.mock("../../App", () => "../../App");

test("renders App Component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Expo + Next.js 👋/i);
  expect(linkElement).toBeInTheDocument();
});
