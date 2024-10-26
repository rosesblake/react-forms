import { render, screen } from "@testing-library/react";
import App from "./App";
import BoxList from "./BoxList";

it("renders an app with a BoxList", () => {
  render(
    <App>
      <BoxList />
    </App>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <App>
      <BoxList />
    </App>
  );
  expect(asFragment()).toMatchSnapshot();
});
