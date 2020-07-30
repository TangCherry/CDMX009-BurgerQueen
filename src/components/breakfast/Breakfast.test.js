import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Breakfast from "./Breakfast";

test("render the images", () => {
  const history = createMemoryHistory();
  const { getByAltText } = render(
    <Router history={history}>
      <Breakfast />
    </Router>
  );
  const img = getByAltText("title");
  expect(img).toHaveAttribute("src", "title.svg");
});
