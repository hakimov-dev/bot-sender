const axios = require('axios')
const env = require('dotenv').config({path: '../.env'});

const api = axios.create({
    baseURL: `${env.parsed.API_URL}`,
})

module.exports = api