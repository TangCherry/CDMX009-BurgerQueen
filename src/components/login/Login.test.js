import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';
import { withRouter } from 'react-router-dom';

describe ('Login', ()=> {
  it('Debería de tener un input tipo email', ()=> {
      const {getByPlaceHolder} = render((<Router><Login /></Router>));
      const input = getByPlaceHolderText('correo');
      expect (input).toBeInTheDocument();
      expect (input.type).toBe('email');
  });
});

// test('renders learn react link', () => {
//     console.log(render(withRouter(Login)));
//   const { findByRole } = render(withRouter(Login));
//   let role = findByRole("img")
//   expect(role).toBeInTheDocument()
// });

