/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Portfolio />, section);
});
