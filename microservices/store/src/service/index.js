const fs = require('fs').promises
const path = require('path')
const getCalculation = require('./getCalculation')

module.exports = async (value) => {
    let valid = false
    const data = await fs.readFile(path.resolve('public', 'file.json'))
    const values = JSON.parse(data);

    // Percore o arquivo e verifica se existe a expressão 
    Object.keys(values).forEach((item) => {
        if(item === value){
            valid = values[item]
        };
    });
    
    // Caso não existe, chama outro serviço e após isso salva a expressão no arquivo
    if(!valid){
        const result = await getCalculation(value)
        values[value] =   result.data.value.toString()
        fs.writeFile(path.resolve('public', 'file.json'), Buffer.from(JSON.stringify(values)))
        valid = result.data
    }
    return {
        [value]: valid
    }
}