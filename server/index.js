const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('../client/build'));
app.get('*', (req, res) => {
    console.log(__dirname, process.env.SERVER_PORT);
    res.sendFile(path.resolve('../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
