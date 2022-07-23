
"use strict";
/* eslint-disable */
/*
1. Create a http server which listens to 3000 port.

2. The home page “/” which displays an html page with a blog post form: there's a 
title input, a blog body textarea and a submit button in the form

3. User enter information, then click “Submit” button

4. On the server side, grab user's inputs and save into a file.

5. After saving successfully, display "Save Successfully" 
page to user with a link goes back to home page.
*/

const http = require('http');
const fs = require('fs');
const path = require('path')

http.createServer((req, res)=>{
if(req.url === "/" && req.method === 'GET'){
    res.end(fs.readFileSync('./index.html'))
}else if(req.url=='/submitted.html' && req.method == 'POST'){
    const body = [];
    req.on('data',chunk =>{
        body.push(chunk);
    })
    req.on('end', ()=>{
        const content = Buffer.concat(body).toString();
        const str = content.split('&')
       

        fs.writeFile(path.join(__dirname,'files', 'myfile.txt'), `${str[0]} ${str[1]}`, (err)=>{
            if(err){
                res.end('try again')
            }else{
                res.end(`<html><body>save successfully <br> <a href="/">home</a></body></html>`)
            }
        })
    })
   
}





}).listen(3000, ()=>console.log("listining on 3000 ...."))