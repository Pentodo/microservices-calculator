const express = require('express');
const axios = require('axios').default;

const router = express.Router();

router.get('/', (req, res, next) => {
	next();
});

router.get('/:expression(*)', function (req, res) {
	axios({
		method: 'get',
		url: `http://localhost:3002/${req.params.expression}`,
	})
		.then((response) => res.send(response.data.toString()))
		.catch((error) => res.status(500).send(error.response?.data || 'Erro no microsserviço store!'));
});

module.exports = router;
