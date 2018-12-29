import { parse } from 'url';
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware');
const express = require('express');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const nextI18next = require('../i18n');

app
	.prepare()
	.then(() => {
		const server = express();
		nextI18NextMiddleware(nextI18next, app, server);
		server.get('*', (req, res) => {
			const parsedUrl = parse(req.url, true);
			return handle(req, res, parsedUrl);
		});

		server.listen(port, (err) => {
			if (err) throw err;
			console.log('> Ready on http://localhost:3000');
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
