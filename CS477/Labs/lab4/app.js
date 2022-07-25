"use strict";
/* eslint-disable */
/*
1. Create a npm project and install Express.js (Nodemon if you want)
2. Change your Express.js app which serves HTML files (of your choice with your content) for “/”, “/users” and “/products”.
3. For “/users” and “/products”, provides GET and POST requests handling (of your choice with your content) in different routers.
4. Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.
5. Customize your 404 page
6. Provide your own error handling
*/

const express = require ('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000);


app.use(express.urlencoded({extended:true})); // returns req.body
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login',(req, res, next)=>{
    if(req.body.username === "admin" && req.body.pswd === "admin"){
        res.redirect('/products');
    }else{
        res.sendFile(path.join(__dirname, 'index.html'));
    }
   
});
app.use('/products', (req, res, next)=>{
    res.sendFile(path.join(__dirname, 'products.html'));
   
});

app.use('/',(req, res, next)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
   
});

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
});

app.listen(app.get('port'),()=>{console.log("listening on 3000 ...........")})