import React from "react";
import { render, fireEvent, screen, within } from "@testing-library/react";
import BoxList from "./BoxList";
import Box from "./Box";

it("renders", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <BoxList>
      <Box color="blue" width={10} height={10} />
    </BoxList>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("updates based off of form data", () => {
  render(<BoxList />);

  const colorInput = screen.getByLabelText("Color:");
  const widthInput = screen.getByLabelText("Width:");
  const heightInput = screen.getByLabelText("Height:");
  const button = screen.getByRole("button");

  fireEvent.change(colorInput, { target: { value: "black" } });
  fireEvent.change(widthInput, { target: { value: 10 } });
  fireEvent.change(heightInput, { target: { value: 10 } });

  fireEvent.click(button);

  const box = screen.getByTestId("box");
  expect(box).toBeInTheDocument();

  expect(box.style._values).toEqual({
    "background-color": "black",
    width: "10px",
    height: "10px",
  });
});
