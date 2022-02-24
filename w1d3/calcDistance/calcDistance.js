"use strict";
module.exports = {calcDistance};
/** 
* 
* @param {Number} x1 The first number.
* @param {Number} y1 The third number.
* @param {Number} x2 The second number.
* @param {Number} y2 The forth number. 
* @returns {Number} The distance .
*/
function calcDistance(x1 , y1, x2 , y2){
    let dist = Math.sqrt(   Math.pow( (x2 - x1) , 2 )   +   Math.pow( ( y2 - y1 ), 2));
    dist = dist.toFixed(2);

    return dist;

}

console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
console.log("expect 49.50 : ", calcDistance (10, 10, 45, 45));

