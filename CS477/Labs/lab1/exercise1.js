"use strict";
/* eslint-disable */

let arr = [1,2,3,4,5,6,7,8];


Array.prototype.even = function(){
    arr = this;
    return arr.filter(elem => elem%2 == 0 );
}
Array.prototype.odd = function(){
    arr = this;
    return arr.filter(elem => elem%2 != 0 );
}

console.log(arr.even()); 
console.log(arr.odd());