import React from "react";
import { Router, withRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, createEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";

test("render the img", () => {
  const history = createMemoryHistory();

  const { getByAltText } = render(
    <Router history={history}>
      <Menu />
    </Router>
  );
  const breakfast = getByAltText("breakfast");
  expect(breakfast).toHaveAttribute("src", "breakfast.svg");

  const meal = getByAltText("meal");
  expect(meal).toHaveAttribute("src", "meal.svg");
});

test("renders learn react link", () => {
  const { getAllByRole } = render(
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
  const img = getAllByRole("img");
  expect(img.length).toEqual(5);
});
