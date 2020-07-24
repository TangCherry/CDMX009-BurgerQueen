import React from "react";
import { Router, withRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Personal from "./Personal";
import { BrowserRouter } from "react-router-dom";
import { auth, db } from "../firebase/firebase";
import {user} from  '../../hooks/useAuth';

// test("render the img", () => {
    
//   const history = createMemoryHistory();

//   const { getByAltText } = render(
//     <Router history={history}>
//       <Personal />
//     </Router>
//   );
//   const waiter = getByAltText("waiter");
//   expect(waiter).toHaveAttribute("src", "waiter.svg");

//   const chef = getByAltText("chef");
//   expect(chef).toHaveAttribute("src", "chef.svg");
// });

test("renders learn react link", () => {
    

  const { getAllByRole } = render(
    <BrowserRouter>
      <Personal />
    </BrowserRouter>
  );
  const img =  getAllByRole("img");
  expect(img.length).toEqual(4);
});

// test("render the placeholder", () => {
//   const { getByPlaceholderText } = render(
//     <BrowserRouter>
//       <Personal />
//     </BrowserRouter>
//   );
//   const input = getByPlaceholderText("correo");
//   expect(input).toBeInTheDocument();
//   expect(input.type).toBe("email");
// });
