import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

let renderMethod: ReactDOM.Renderer;
if (root && root.innerHTML !== '') {
  renderMethod = ReactDOM.hydrate;
} else {
  renderMethod = ReactDOM.render;
}

ReactDOM.hydrate(
  <Router>
    <App />
  </Router>,
  root
);
