import React from "react";
import { Router, BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import Menu from "./Menu";

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
