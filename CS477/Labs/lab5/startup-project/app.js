"use strict";
/* eslint-disable */
const productRouter = require('./router/productRouter.js')
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/products', productRouter);

app.use((req, res, next)=>{
    res.status(400).send('page not found')
})

app.use((err, req, res, next)=>{
    res.status(500).send(err)
})

app.listen(app.get('port'));