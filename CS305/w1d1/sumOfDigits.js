"use strict";

const prompt = require("prompt-sync")();
let number = prompt("Enter a integer: ");
let sum = 0;
for(let i=0 ; i<number.length; i++){
       sum += Number(number[i]);
}
console.log(sum);