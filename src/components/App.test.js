import React from 'react';
import ReactDOM from 'react-dom';
import Init from './Init';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Init />, div);
  ReactDOM.unmountComponentAtNode(div);
});
