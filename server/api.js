const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const database = axios.create({
    baseURL: process.env.DB_BASE_URL,
});

const api = {
    database,
};

module.exports = api;
