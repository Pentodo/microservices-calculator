const express = require('express');

const router = express.Router();

router.get('/:expression(*)', function (req, res) {
	try {
		const expression = req.params.expression;
		if (expression === '' || /\/{2,}/.test(expression) || !/[*/\-+]/.test(expression)) {
			throw 'something wrong';
		}

		res.send(JSON.stringify(new Function(`return ${expression}`)()));
	} catch {
		res.status(400).send(JSON.stringify('Entrada inválida!'));
	}
});

module.exports = router;
