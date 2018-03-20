import React from 'react';
import ReactDOM from 'react-dom';
import Conversor from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Conversor />, div);
  ReactDOM.unmountComponentAtNode(div);
});