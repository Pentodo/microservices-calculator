const express = require('express');
const router = express.Router();
const serviceResponse = require('../service')

router.get('/', async function (req, res, next) {
	try {
        const expression = req.query
        if(!expression.count){
            res.send('Invalid parameter!').status(400)
        }
        const { data } = await serviceResponse(expression)
        console.log(data);
        res.send({ result: data.count_result }).status(200)
    } catch (error) {
        console.log(error);
        res.send('Server Error').status(500)
    }
});

module.exports = router;
