"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {number} num first number
 *@returns {number} double the input
 */
function double(num){
    return num * 2;

}


/**
 * @param {number} num a number
 * @returns {number} 100 times the input
 */
 function times100(num){
     return num * 100;
 }


/**
 * @param {Array} arr an array 
 * @param {function} func a function
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func){
let arr2 = [];
    for (const element of arr) {
        arr2.push(func(element));

    }
    return arr2;
}




