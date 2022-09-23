const express = require('express');
const axios = require('axios').default;

const router = express.Router();

router.get('/', function (req, res, next) {
	res.render('index', { title: 'Calculadora' });
});

router.post('/', function (req, res, next) {
	axios({
		method: 'get',
		url: `http://${process.env.RESPONSE_MICROSERVICE || 'localhost:3001'}/${req.body.expression}`,
	})
		.then((response) => {
			res.send(JSON.stringify(response.data));
		})
		.catch((error) =>
			res
				.status(error.response?.status || 500)
				.send(JSON.stringify(error.response?.data || 'Erro no microsserviço response!'))
		);
});

module.exports = router;
