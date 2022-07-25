"use strict";
/* eslint-disable */


const express = require('express');

const app = express();



app.get('/users', (req, res, next)=>{
    console.log(1);
   res.redirect('/')
    next();
});

app.post('/users',(req, res, next)=>{
    console.log(2);
    next();

});
app.get('/',(req, res, next)=>{
    res.send("welcome")
})
app.all((req,res, next)=>{
    console.log(3);
    res.status(200).send('try again')
});

app.listen(3000);