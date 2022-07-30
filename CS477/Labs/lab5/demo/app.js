"use strict";
/* eslint-disable */
const express = require('express');
const productRouter = require('./router/productRouter');

const app = express();

app.use(express.json());

app.use('/products',productRouter);

app.listen(3000);