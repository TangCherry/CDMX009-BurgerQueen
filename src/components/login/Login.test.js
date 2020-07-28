import React from "react";
import { Router, withRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

test("render the img", () => {
  const history = createMemoryHistory();

  const { getByAltText } = render(
    <Router history={history}>
      <Login />
    </Router>
  );
  const burger = getByAltText("burger");
  expect(burger).toHaveAttribute("src", "burger.svg");

  const title = getByAltText("title");
  expect(title).toHaveAttribute("src", "title.svg");
});

test("renders learn react link", () => {
  const { getAllByRole } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const img = getAllByRole("img");
  expect(img.length).toEqual(5);
});

test("render the placeholder", () => {
  const { getByPlaceholderText } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  const input = getByPlaceholderText("correo");
  expect(input).toBeInTheDocument();
  expect(input.type).toBe("email");
});