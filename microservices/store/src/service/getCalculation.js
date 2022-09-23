const axios = require('axios').default

module.exports = async (expression) => {
    return await axios({
        method: 'get',
        url: `http://localhost:3003/${expression}`
    });
} 