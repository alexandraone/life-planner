import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import reducers from './reducers/index';

declare global {
  interface Window {
    __INITIAL_STATE__: any;
  }
}

const root = document.getElementById('root');
const initialState = window.__INITIAL_STATE__;
const store = createStore(reducers, { ...initialState });

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root,
  () => delete window.__INITIAL_STATE__
);
