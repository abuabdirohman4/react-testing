import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("memunculkan seluruh tag html dalam app", () => {
  render(<App />);
  screen.debug();
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  screen.debug();
});
