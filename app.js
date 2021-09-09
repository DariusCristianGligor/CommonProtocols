const express = require('express')
const path = require('path');
const open = require('open');
const { hostname } = require('os');
const app = express();
const router = express.Router()

const port = 1002;

let url = `http://localhost:${port}/index.html`;

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + "/" + req.url));
});

open(url);

app.use('/', router);

app.listen(port, hostname);