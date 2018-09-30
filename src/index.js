import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Init from './components/Init';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Init />, document.getElementById('root'));
registerServiceWorker();
