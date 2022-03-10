"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {*} arr array.
 * @param {*} func function.
 * @returns return,
 */
function myMap(arr, func) {
    let arr2 =[];
for (const elem of arr) {
    arr2.push(func(elem));
}
return arr2;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
function myFilter(arr, func) {
    let arr2 =[];
for (const elem of arr) {
    if((func(elem))){
       arr2.push(elem); 
    }  
}
return arr2;
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
function myReduce(arr, func, initialValue) {

    for (let i=0; i<arr.length; i++) {
         initialValue =func(initialValue, arr[i]);
    }
    return initialValue  ;
    }