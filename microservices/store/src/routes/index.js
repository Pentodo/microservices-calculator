const express = require('express');
const serviceStore = require('../service/index')

const router = express.Router();

router.get('/:count', async function (req, res) {
	try {
		const { count } = req.params
		const response = await serviceStore(count)
		res.send(response);
	} catch (error) {
		res.status(500).send('Server Error')
	}

});

module.exports = router;
