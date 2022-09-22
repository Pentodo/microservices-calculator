const express = require('express');
const router = express.Router();
const serviceResponse = require('../service')

router.get('/:count', async function (req, res) {
	try {
        const expression = req.params
        if(!expression.count){
            res.send('Invalid parameter!').status(400)
        }
        const { data } = await serviceResponse(expression)
        res.send(data).status(200)
    } catch (error) {
        console.log(error);
        res.send('Server Error').status(500)
    }
});

module.exports = router;
