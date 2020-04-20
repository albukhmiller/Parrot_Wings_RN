const axios = require('axios').default;

export function getAxios() {

    const axios = require('axios').default;
    return axios.create({
        baseURL: 'http://193.124.114.46:3001',
        timeout: 5000
    })
}