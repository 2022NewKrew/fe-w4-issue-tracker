const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('../client/build'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/issues', (req, res) => {
    console.log('GET /issues');
    res.status('200').json({ data: 'this is your response' });
});

app.get('*', (req, res) => {
    console.log(__dirname, process.env.SERVER_PORT);
    res.sendFile(path.resolve('../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
