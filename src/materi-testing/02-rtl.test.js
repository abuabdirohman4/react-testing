import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa abu ada di dalam aplikasi saya", () => {
  render(<App />);
  const text = screen.getByText("Hello Abu")
  expect(text).toBeInTheDocument()
});
