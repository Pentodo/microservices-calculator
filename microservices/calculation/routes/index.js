const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	next();
});

router.get('/:expression(*)', function (req, res) {
	try {
		res.send(new Function(`return (${req.params.expression}).toString()`)());
	} catch {
		res.status(400).send('Entrada inválida!');
	}
});

module.exports = router;
