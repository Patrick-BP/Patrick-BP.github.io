"use strict";
/* eslint-disable */

const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.set('port', process.env.PORT || 3000)


app.use(express.urlencoded({extended:true}));

app.get('/',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'login.html'));
});

app.post('/login', (req, res, next)=>{

    if(req.body.username && req.body.password){
        let data = fs.readFileSync(path.join(__dirname,'files', 'database.txt' ));
        let datainfo = data.toString();
        let dataArr = datainfo.split(',');
        let obj = {};
        dataArr.forEach(Element=>{
          let  arr = Element.split('=');
          obj[arr[0]] = arr[1];
        });
        let username = req.body.username;
        let password = req.body.password;
         

        if( obj.hasOwnProperty(username) && obj[username] === password){
            res.send(`welcome ${username}`);
        }else{
            res.send(`<html> <body>
            <h1>login<h1>
            <form action="/login" method="post">
                <input type="text" name="firstname" placeholder="username"><br>
                <input type="text" name="lastname"  placeholder="password"><br><br>
                <button type="submit">submit</button>
                <h3>incorrect username and password</h3>
                </form>
                </body>
            `)
        }
        
        
    }else{
        res.send(`<html> <body>
        <h1>login<h1>
        <form action="/login" method="post">
            <input type="text" name="firstname" placeholder="username"><br>
            <input type="text" name="lastname"  placeholder="password"><br><br>
            <button type="submit">submit</button>
            <h3>Please enter username and password </h3>
            </form>
            </body>
        `)
    }
    

});


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.use((err, req, res, next)=>{
    res.status(500).send(err.message);
});

app.listen(app.get('port'));


