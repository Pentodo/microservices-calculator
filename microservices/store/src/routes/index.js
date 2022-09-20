const express = require('express');
const serviceStore = require('../service/index')

const router = express.Router();

router.get('/:count', async function (req, res) {
	const {count} = req.params
	const response = await serviceStore(count)
	res.send(response);
});

module.exports = router;
