import { render, screen } from "@testing-library/react";
import App from "../App";

test("melakukan testing untuk queryBy dan findBy", async () => {
  render(<App />);
  //   const txt = screen.getByText(/Selamat Datang/);

  //   Kalau hasilny null, agar tidak error
  const txt = screen.queryByText(/Selamat Datang/);
  //   expect(txt).not.toBeInTheDocument;
  expect(txt).toBeNull();
  //   expect(txt).toBeInTheDocument;

  //   const txt2 = screen.getByText(/Selamat Datang/);
  //   const txt2 = screen.findByText(/Selamat Datang/);
  
  // Untuk Async
  const txt2 = await screen.findByText(/Selamat Datang/);
  expect(txt2).toBeInTheDocument;
});
