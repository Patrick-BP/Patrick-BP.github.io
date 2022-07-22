
"use strict";
const { fstat } = require('fs');
/* eslint-disable */
/*
1. Create a http server which listens to 3000 port.

2. The home page “/” which displays an html page with a blog post form: there's a 
title input, a blog body textarea and a submit button in the form

3. User enter information, then click “Submit” button

4. On the server side, grab user's inputs and save into a file.

5. After saving successfully, display "Save Successfully" page to user with a link goes back to home page.
*/

const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
if(req.url === "/"){
    res.end(fs.readFileSync('./index.html'))
}

}).listen(3000, ()=>console.log("listining on 3000 ...."))