import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders", () => {
  render(<Todo task={"wash clothes"} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo task={"wash clothes"} />);
  expect(asFragment()).toMatchSnapshot();
});
