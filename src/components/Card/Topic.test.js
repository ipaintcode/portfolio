/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import Topic from './Topic';

it('renders without crashing', () => {
  const span = document.createElement('span');
  ReactDOM.render(<Topic />, span);
});
