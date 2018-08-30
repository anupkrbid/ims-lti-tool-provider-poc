const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const Cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/error-handler');

const LTIRoutes = require('./api/v1/routes/lti');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(Cors);

app.use('/api/v1/', LTIRoutes);

app.use(errorHandler.badRequest);
// app.use(errorHandler.anyError);

module.exports = app;
