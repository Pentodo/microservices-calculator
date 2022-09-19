const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', function (req, res, next) {
	res.sendFile(path.resolve('public', 'file.json'));
});

module.exports = router;
