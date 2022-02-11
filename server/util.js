const { database } = require('./api');

const parallelFetch = (reqUrls) => {
    const promises = [];
    reqUrls.forEach((reqUrl) => promises.push(database.get(reqUrl)));
    return Promise.all(promises);
};

const utils = {
    parallelFetch,
};

module.exports = utils;
