import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";
import { store } from "./redux/state";
// import {addPost, state} from "./redux/state";


 test.skip('renders learn react link', () => {

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
