const express = require('express');
const productRouter = require('./product.router');

const app = express();
app.use('/product',productRouter);

module.exports = app;