const express = require('express');

const router = express.Router();

router.get('/:expression(*)', function (req, res) {
	try {
		res.send(JSON.stringify(new Function(`return ${req.params.expression}`)()));
	} catch {
		res.status(400).send('Entrada inválida!');
	}
});

module.exports = router;
