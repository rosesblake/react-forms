import { render, fireEvent, screen } from "@testing-library/react";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";

it("renders", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("submits form with data", () => {
  render(<TodoList />);

  const input = screen.getByLabelText("New Todo:");
  const button = screen.getByRole("button");

  fireEvent.change(input, { target: { value: "buy milk" } });
  fireEvent.click(button);

  const todo = screen.getByText("buy milk");
  expect(todo).toBeInTheDocument();
});
