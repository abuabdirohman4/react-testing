import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("untuk testing select element dan dijadikan expect value", () => {
  test("memastikan text yang dirender pertama betul", () => {
    render(<App />);
    const txt = screen.getByText("Saya Sedang Sembunyi");
    expect(txt).toBeInTheDocument();
  });
  
  test("memastikan content text button sesuai saat pertama render", () => {
    render(<App />);
    const txt = screen.getByText("Munculkan");
    expect(txt).toBeInTheDocument();
  });
})
