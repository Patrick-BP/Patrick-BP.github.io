"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate , camelize, checkSpam, extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
  if(str == ""){
    return "";
   }else{
 let newStr = str[0].toUpperCase() + str.slice(1);
 return newStr;
   }
  }

  function checkSpam(str) {
    
      return str.includes("xxx") || str.includes("ViAgRA");

  }


  function truncate(str, maxlength) {
    if(str.length > maxlength){
      let newStr = str.slice(0, maxlength-1)+ "…";
        return newStr;
    }else{
      return str;
    }

  }

function extractCurrencyValue(str){
  return Number(str.slice(1));
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let maxSum = 0; 
  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;

}


function camelize(str) {
  if(str === ""){
    return str;
  }else{
    let newstrArr = str.split("-");
    let newst= newstrArr[0];
    for (let i=1; i<newstrArr.length; i++) {
    newst += ucFirst(newstrArr[i]);
    }
    
    return newst;
    
  }
  

  }


camelize("background-color");