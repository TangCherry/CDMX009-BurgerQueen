import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Personal from "./Personal";

test("renders learn react link", () => {
  const { getAllByRole } = render(
    <BrowserRouter>
      <Personal />
    </BrowserRouter>
  );
  const img = getAllByRole("img");
  expect(img.length).toEqual(4);
});
