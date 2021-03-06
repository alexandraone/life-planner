import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { ServerStyleSheet } from 'styled-components';
import App from '../App';
import reducers from '../store/reducers/index';

const app = express();

const PORT = process.env.PORT || 3000;
declare const module: any;
const initialState = {};
const store = createStore(reducers, initialState);
const sheet = new ServerStyleSheet();

// Tell express to serve our static files from our output folder
app.use(express.static('dist/public'));

// Hide "powered by express"
app.disable('x-powered-by');

// Server side rendered page
app.get('/*', (req, res) => {
  const appComponent = (
    <ReduxProvider store={store}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactDom = renderToString(sheet.collectStyles(appComponent));
  const styles = sheet.getStyleTags();

  res.send(htmlTemplate(reactDom, styles));
});

function htmlTemplate(reactDom: string, styles: string) {
  return `
    <!DOCTYPE html>
      <html>
        <head>
          <title>React and TypeScript with webpack</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
          ${styles}
        </head>
        <body style="background-color: #29516D">
          <div id="root">${reactDom}</div>
          <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
        </script>
          <!-- Compiled TypeScript -->
          <script src="bundle.js" type="text/javascript"></script>
        </body>
      </html>
`;
}

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

if (module.hot) {
  module.hot.accept();
}
