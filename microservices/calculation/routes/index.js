const express = require('express');
const router = express.Router();
const serviceCalculation = require('../service')

router.get('/:count', async function (req, res) {
	try {
        const expression = req.params
        if(!expression.count){
            res.send('Invalid parameter!').status(400)
        }
        const result = await serviceCalculation(expression.count)
        res.send({ value: result }).status(200)
    } catch (error) {
        res.send('Server Error').status(500)
    }
});

module.exports = router;
