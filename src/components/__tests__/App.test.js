import React from 'react';
import { render, unmountComponentAtNode } from "@testing-library/react";
import App from '../App';

it('shows a comment box', () => {
  const div = document.create('div');

  render(<App />, div);

  unmountComponentAtNode(div);

})