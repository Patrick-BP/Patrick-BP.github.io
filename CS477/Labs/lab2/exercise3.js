"use strict";
/* eslint-disable */

/*
Using Node Stream API, create a script to unzip a file (after you zip it). 
(Use zlib.createGunzip() stream)
*/

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gzip = zlib.createGzip();

if(!fs.existsSync('./files/destination.txt.gz')){
const readable = fs.createReadStream(path.join(__dirname,'files', 'file.txt'));
const compressed = fs.createWriteStream(path.join(__dirname,'files', 'destination.txt.gz'));
readable.pipe(gzip).pipe(compressed);
}    


if(fs.existsSync('./files/destination.txt.gz')){
    const gunzip = zlib.createGunzip();
    const readable = fs.createReadStream(path.join(__dirname,'files', 'destination.txt.gz'));
    const unzip = fs.createWriteStream(path.join(__dirname,'files', 'destination.txt'));
    readable.pipe(gunzip).pipe(unzip);
}
 
 