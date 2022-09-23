const express = require('express');
const axios = require('axios').default;

const router = express.Router();

router.get('/:expression(*)', function (req, res) {
	axios({
		method: 'get',
		url: `http://localhost:3002/${req.params.expression}`,
	})
		.then((response) => res.send(JSON.stringify(response.data)))
		.catch((error) =>
			res
				.status(error.response?.status || 500)
				.send(JSON.stringify(error.response?.data || 'Erro no microsserviço store!'))
		);
});

module.exports = router;
