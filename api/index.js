const axios = require('axios')
const env = require('dotenv').config({path: '../.env'});

const api = axios.create({
    baseURL: 'https://api.telegram.org/bot',
})

module.exports = api