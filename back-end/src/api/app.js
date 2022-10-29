const express = require('express');
const errorHandler = require('../middlewares/errorHandler');
require('express-async-errors');
const routes = require('../routes/routes');

const app = express();
app.use(express.json());
app.use(routes);
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorHandler);
module.exports = app;
