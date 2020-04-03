import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './services/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);