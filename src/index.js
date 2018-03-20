import React from 'react';
import ReactDOM from 'react-dom';
import './content/style/index.css';
import Conversor from './views/conversor/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Conversor />, document.getElementById('root'));
registerServiceWorker();
