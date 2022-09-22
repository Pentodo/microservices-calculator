const fs = require('fs').promises
const path = require('path')
const getCalculation = require('./getCalculation')

module.exports = async (value) => {
    let valid = false
    const data = await fs.readFile(path.resolve('public', 'file.json'))
    const values = JSON.parse(data);
    Object.keys(values).forEach((item) => {
        if(item === value){
            valid = values[item]
        };
    });
    
    if(!valid){
        const result = await getCalculation(value)
        valid = result.data
    }
    return valid
}