"use strict";


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {copyArray, concat, findMin, combineObjs, rest }; //add all of your function names here that you need for the node mocha tests



function copyArray(arr){
    let arr2 =[];
    for (const elem of arr) {
        arr2.push(elem);
    }
    return arr2;
}

function concat(arr1, arr2){
     return [...arr1, ...arr2];
}

function concat2(arr1, x){
    return [...arr1, x];
}

function findMin(...numbers) {
    return Math.min(...numbers);
    
}
function findMax(...numbers) {
    return Math.max(...numbers);
    
}

function combineObjs(obj1, obj2){
    return {...obj1, ...obj2};

}


/*Write code to illustrate the use of the rest operator
a. In a destructuring assignment
b. In a function call */

//In a destructuring assignment
let [x, y, ...z] = [1,2,3,4,5,6];
console.log(z);

//In a function call
function rest([x, y, ...more]){
return more;
}