import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "./App";
import {dialogsData, messagesData, post} from ".";

test('renders learn react link', () => {
  render(<App dialogsData = {dialogsData}
              messagesData = {messagesData}
              post={post}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
