const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const axios = require('axios').default;

const router = express.Router();

router.get('/:expression(*)', function (req, res) {
	const expression = req.params.expression;

	fs.readFile(path.resolve('public', 'file.json'))
		.then((data) => JSON.parse(data))
		.catch((error) => ({}))
		.then((expressions) => {
			if (expressions[expression]) {
				res.send(JSON.stringify(expressions[expression]));
				return;
			}

			axios({
				method: 'get',
				url: `http://localhost:3003/${expression}`,
			})
				.then((response) => {
					res.send(JSON.stringify(response.data));

					expressions[expression] = response.data;
					fs.writeFile(path.resolve('public', 'file.json'), JSON.stringify(expressions));
				})
				.catch((error) =>
					res
						.status(error.response?.status || 500)
						.send(JSON.stringify(error.response?.data || 'Erro no microsserviço calculation!'))
				);
		});
});

module.exports = router;
