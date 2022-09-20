const fs = require('fs').promises
const path = require('path')

module.exports = async (value) => {
    let valid = false

    const data = await fs.readFile(path.resolve('public', 'file.json'))
    const values = JSON.parse(data);
    Object.keys(values).forEach((item) => {
        if(item === value){
            valid = values[item]
        };
    });

    return valid
}