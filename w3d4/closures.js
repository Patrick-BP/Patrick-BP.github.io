"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests



/* 
Section: Closure
• Does a function pickup latest changes? ==>
• Which variables are available?
• Are counters independent?
• Counter object
• Function in if
• Sum with closures
• Is variable visible?
*/







/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {

return function (x){
 return arr.includes(x);
  
  };

}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
  return function (x){
    if(x >= low && x <= high){
      return true;
    }else{
      return false;
    }
  };

}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){

  return function(x,y){
    return x[fieldName] > y[fieldName] ? 1 : -1;
  };

}


/**
 * @returns {Function} closure that returns it's number
 */
// function makeArmy() {

//   }

//   let army = makeArmy();
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...

  function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let x= i;
      let shooter = function() { // create a shooter function,
        console.log( x ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
  
    // ...and return the array of shooters
    return shooters;
  }
  
  let army = makeArmy();
  
  // all shooters show 10 instead of their numbers 0, 1, 2, 3...
  army[0](); // 10 from the shooter number 0
  army[1](); // 10 from the shooter number 1
  army[2](); // 10 ...and so on.