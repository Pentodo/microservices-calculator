const axios = require('axios').default

module.exports = async () => {
    return axios({
        method: 'get',
        url: 'http://localhost:3002'
    });
}