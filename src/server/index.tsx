import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../App';
import * as SocketIO from 'socket.io';
import * as socketService from './socketService';
import * as neodeService from './neodeService';

const app = express();

const PORT = process.env.PORT || 3000;
declare const module: any;

// Tell express to serve our static files from our output folder
app.use(express.static('dist/public'));

// Hide "powered by express"
app.disable('x-powered-by');

// Server side rendered page
app.get('/*', (req, res) => {
	const appComponent = (
		<StaticRouter location={req.url} context={{}}>
			<App />
		</StaticRouter>
	);
	const reactDom = renderToString(appComponent);

	res.send(htmlTemplate(reactDom));
});

function htmlTemplate(reactDom: string) {
	return `
    <!DOCTYPE html>
      <html>
        <head>
          <title>React and TypeScript with webpack</title>
        </head>
        <body>
          <div id="root">${reactDom}</div>

          <!-- Compiled TypeScript -->
          <script src="bundle.js" type="text/javascript"></script>
        </body>
      </html>
`;
}

// Start the server
const server = app.listen(PORT, () =>
	console.log('Server running on port 3000!')
);

if (module.hot) {
	module.hot.accept();
}

// Create a socket.io instance
const io = SocketIO(server);
socketService.createSocket(io, neodeService);
