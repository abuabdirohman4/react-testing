import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { CompUserEvent } from "./CompUserEvent";

const MOCK_SUBMIT_BTN = jest.fn();

test("testing onChange event ketika typing", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Text input");
  userEvent.type(input, "Abu Abdirohman");
  expect(screen.getByText(/Anda mengetik Abu Abdirohman/)).toBeInTheDocument;
});

it("test onClick pada compUserEvent", () => {
  render(<CompUserEvent onSubmit={MOCK_SUBMIT_BTN}/>);
  const textSubmit = screen.getByTestId("text-submit")
  userEvent.click(textSubmit)
  expect(MOCK_SUBMIT_BTN).toHaveBeenCalled()
});
