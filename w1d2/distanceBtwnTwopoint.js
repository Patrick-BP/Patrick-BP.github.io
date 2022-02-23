"use strict";
/** 
* 
* @param {int} x1 The first number.
* @param {int} y1 The third number.
* @param {int} x2 The second number.
* @param {int} y2 The forth number. 
* @returns {int} The distance .
*/
function calcDistance(x1 , y1, x2 , y2){
    let dist = Math.sqrt(   Math.pow( (x2 - x1) , 2 )   +   Math.pow( ( y2 - y1 ), 2));
    dist = dist.toFixed(2);

    return dist;

}

console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));