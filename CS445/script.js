"use strict";
/* eslint-disable */

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let btn = document.getElementById("btn");

btn.onclick = swap;

function swap(){  
let x = img1.innerHTML; 
   img1.innerHTML = img2.innerHTML;
   img2.innerHTML = x;
}






