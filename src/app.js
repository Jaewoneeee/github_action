const express = require('express');
const bodyParser = require('body-parser');
const { helloRouter } = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use('/hello', helloRouter);

module.exports = app;
