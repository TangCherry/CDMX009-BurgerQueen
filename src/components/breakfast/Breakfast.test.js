import React from "react";
import { Router, withRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, screen, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Breakfast from "./Breakfast";
import { BrowserRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import TestUtils from 'react-dom/test-utils';

test("render the images", () => { 
    const history = createMemoryHistory();

    const { getByAltText } = render (
        <Router history={history}>
            <Breakfast />
        </Router>
    );
    const img = getByAltText("title");
    expect(img).toHaveAttribute("src", "title.svg");
});

// test("should have a form", () => { 
//     const testDiv = document.createElement('div');
    
//     render(
//         <Form>
//             <Form.Control 
//             placeholder="Cliente"
//             />
//         </Form>,
//         testDiv
//     );
//     const input = testDiv.querySelector('input');
//     testUtils.Simulate.change(input, { target: { value: 'Peter Parker' } });
//     expect(input.value).toEqual('Peter Parker');
// });

// test("render menu items", async () => { 
//     const { getByTestId } = render(
//         <BrowserRouter>
//         <Breakfast
//         item={["Chilakillers", "Catrina", "Quetzal", "La Divina", "De la Olla", "Mono Capuccino"]}
//         />
//       </BrowserRouter>
//     );
//      let list = await getByTestId("listMenu")
//     await waitForElement(() => getByTestId("Catrina"));
//     expect(list.children.length==6).toBe(true)
    // expect(screen.getByText("Catrina")).toBeInTheDocument(true)
// })

test ("should be a submit", () => { 
    const submitButton = { button: submit }
    fireEvent.click(getByText('submit'), submitButton)
});