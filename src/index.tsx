import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import {App} from './components';
import {store} from "./system/store";
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);