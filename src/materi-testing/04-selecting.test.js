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
});

describe("melakukan selecting element untuk diberikan trigger fireEvent", () => {
  test("memastikan text yang dirender setelah di klik", () => {
    render(<App />);
    const btn = screen.getByText("Munculkan");
    fireEvent.click(btn);

    const txt = screen.getByText("Saya Sedang Muncul");
    expect(txt).toBeInTheDocument();
  });

  test("Memasikan text di dalam button sesuai setelah button di click", () => {
    render(<App />);
    screen.getByRole("");
    const btn = screen.getByRole("button");
    fireEvent.click(btn);

    const btnResult = screen.getByText("Sembunyikan");
    expect(btnResult).toBeInTheDocument();
  });
});
