const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');

const logger = log4js.getLogger('app');
let app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../../public')));

app.use((err, req, res, next) => {
    logger.info(err.stack);
    res.status(err.status).send(err);
});

module.exports = { app };
