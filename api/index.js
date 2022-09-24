const axios = require('axios')
const env = require('dotenv').config({path: '../.env'});

export const api = axios.create({
    baseURL: env.parsed.API_URL,
})
