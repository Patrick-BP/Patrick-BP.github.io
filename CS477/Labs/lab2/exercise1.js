"use strict";
/* eslint-disable */

/*
Create a simple Node script that converts 'www.miu.edu' domain name to 
the equivalent IP address. (Search and learn 'dns' module, resolve4)
*/

const dns = require('dns');

dns.resolve4('www.miu.edu',(err, address)=>{
    if(err){
        throw new error(err)
    }else
    console.log(address)
})