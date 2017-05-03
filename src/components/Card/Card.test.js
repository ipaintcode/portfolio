/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<Card />, section);
});
