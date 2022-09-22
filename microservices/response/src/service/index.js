const axios = require('axios').default

module.exports = async (parameter) => {
    return axios({
        method: 'get',
        url: `http://localhost:3002/${parameter.count}`
    });
}