"use strict";
/* eslint-disable */

/*
Create a web server that's going to send a response of big image (bigger then 3MB) 
to any client that sends a request to your specified server:port. Use the best way 
for performance. (Try to solve this in many different ways)
*/
  const http = require('http');
  const fs = require('fs');
  const path = require('path');


  // ========= using readfile() =========================


  http.createServer((req, res)=>{
    res.writeHead(200,{'content-type': 'image/jpg'});
   fs.readFile(path.join(__dirname,'img', '1.jpg'), (err,data)=>{
    if(err){
        throw new error(err)
    }  
    res.end(data);
   
   });
  
  }).listen(3000, ()=>{console.log('listening on port 3000....')});

  

  // ========= using stream =========================

/*
  const server = http.createServer();

    server.on('request',(req,res)=>{
        const img = fs.createReadStream(path.join(__dirname,'img', '1.jpg'))
        img.pipe(res);
    });
        
  server.listen(3000, ()=>{console.log('linstening on port 3000');})


 */

  // ========= using createReadstream and event listiner =========================
/*
  http.createServer((req,res)=>{
    
    res.writeHead(200, {'Content-type':'image/jpg'});
    let img = fs.createReadStream(path.join(__dirname, 'img', '1.jpeg'));
        img.on('data', (chunk)=>{
            res.write(chunk)
        })
        
        
  }).listen(3000, ()=>{console.log("listening on port 3000");});
  */