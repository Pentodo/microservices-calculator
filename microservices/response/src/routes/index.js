const express = require('express');
const router = express.Router();
const serviceResponse = require('../service')

router.get('/', async function (req, res, next) {
	try {
        const response = await serviceResponse()
        res.send(response).status(200)
    } catch (error) {
        console.log(error);
        res.send('Server Error').status(500)
    }
});

module.exports = router;
