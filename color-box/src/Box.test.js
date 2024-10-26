import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

it("renders", () => {
  render(<Box />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Box color="blue" />);
  expect(asFragment()).toMatchSnapshot();
});
