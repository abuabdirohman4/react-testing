import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import App from "../App";

jest.mock("axios");

test("untuk memastikan list user dengan call axios", async () => {
  const users = [
    {
      id: 1,
      name: "Abu Abdirohman",
    },
    {
      id: 2,
      name: "Azati Hanani",
    },
    {
      id: 3,
      name: "Imania",
    },
  ];
  axios.get.mockImplementation(() => Promise.resolve({ data: users }));

  render(<App />);

  const btn = screen.getByTestId("get-user");
  userEvent.click(btn);

  await waitFor(() => {
    expect(screen.getAllByTestId("user-name")).toHaveLength(users.length);
  });
});
