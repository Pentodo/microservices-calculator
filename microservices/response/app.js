require('dotenv').config();
const serviceRes = require('./src/routes/index')

const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', serviceRes);

app.listen(port, () => {
	console.log(`App running on http://localhost:${port}`);
});

app.use((req, res) => {
	res.status(404).send('Not Found!');
});
