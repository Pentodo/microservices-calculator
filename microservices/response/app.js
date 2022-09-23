require('dotenv').config();

const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/index');

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`App running on http://localhost:${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use((req, res) => {
	res.status(404).send('Use /:expression para acessar a API de response!');
});

module.exports = app;
