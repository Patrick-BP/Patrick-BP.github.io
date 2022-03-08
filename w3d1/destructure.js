"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests
let salaries = {
  "John": 100,
  "Pete": 50,
  "Mary": 250
};

function topSalary(salaries) {
 let max =0;
 let name = null;
 
    if(salaries === {}){
      return null;
    }else{
      for (const [key, value] of Object.entries(salaries)) {
        if(max < value){
          max = value;
          name = key;
        } 
    }  
  }
  return name;
}

function clone