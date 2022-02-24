"use strict";
module.exports = {sumDigits, multDigits };

/** 
* 
* @param {boolean} digit The first number.
* @param {int} salesAmount The second number.
* @returns {int} The sum of all digit.
*/
function sumDigits (digit){
    let sum = 0;
    while(digit >0){
        
        sum += digit % 10;
        digit = Math.floor(digit / 10);
    }
    return sum;
}
/** 
* 
* @param {int} digit The first  number.
* @returns {int} The multiplication of all digit.
*/
function multDigits(digit){
    let mult = 1 ;
    while(digit >0){
        mult *= digit % 10;
        digit = Math.floor(digit / 10);
    }
    return mult;
}

console.log("expect 10: ", sumDigits(1234));
console.log("expect 3: ", sumDigits(102));
console.log("expect 8: ", sumDigits(8));
console.log("expect 24: ", multDigits(1234));
console.log("expect 0: ", multDigits(102));
console.log("expect 8: ", multDigits(8));