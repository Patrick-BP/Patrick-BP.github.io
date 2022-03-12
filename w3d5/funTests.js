"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {Array} arr array
 * @param {function} func function
 * @returns {Array} return an array
 */
function myMap(arr, func) {
    let arr2 =[];
    for (const elm of arr) {
        arr2.push(func(elm));
    }
    return arr2;
}

/**
 * 
 * @param {*} arr array
 * @param {*} func function
 * @returns {*} array
 */
function myFilter(arr, func) {
let arr2 = [];
for (const elm of arr) {
    if(func(elm)){
        arr2.push(elm);
    }
}
return arr2;
}


/**
 * 
 * @param {*} arr array
 * @param {*} func function
 * @param {*} initialValue initial
 * @returns {*} number
 */
function myReduce(arr, func, initialValue) {
    
    for (const elm of arr) {
       initialValue = func(initialValue , elm);
        
    }
    return initialValue ;
    }