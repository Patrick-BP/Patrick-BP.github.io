"use strict";
module.exports = {maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray};
/**
 * @param {Number} num1 the fist number.
 * @param {Number} num2 the fist number.
 * @param {Number} num3 the fist number.
 * @return {Number} the largest number.
 */
function maxOfThree(num1, num2, num3){
    let largest = 0;
    if(num1 >= num2 && num1 >= num3){
        largest = num1;
    }else if(num2 >= num1 && num2 >= num3){
        largest = num2;
    }else {
        largest = num3;
    }
    return largest;
}

/**
 * @param {Object} arr the fist number.
 * @return {Number} the sum of all numbers.
 */
function sum(arr){
    let result = arr.reduce((sum, current) => sum + current);
    return result;
}
/**
 * @param {Object} arr the fist number.
 * @return {Number} the multiplication of all numbers.
 */
function multiply(arr){
    let result = arr.reduce((mult, current) => mult * current);
    return result;
}


/**
 * @param {Object} arr the fist number.
 * @return {String} the multiplication of all numbers.
 */
function findLongestWord(arr){
    let arr2 =[];
    for(let element of arr){
      arr2.push(element.length);
    }

let max = Math.max(...arr2);
return max;
}

/**
 * @param {Object} arr the fist number.
 * @return {object} the multiplication of all numbers.
 */
function reverseArray(arr){
let reverseArr = [];
for (let i = arr.length-1; i >=0 ; i--) {
    reverseArr.push(arr[i]);
    
}
return reverseArr;

}


/**
 * @param {Object} arr the fist number.
 * @return {object} the multiplication of all numbers.
 */
function reverseArrayInPlace(arr){
    let str ="";
    console.log(str);
    for (let i = 0; i < arr.length; i++) {
        str +=arr[i];
    }
   
    arr.length = 0;
    for (let j = str.length-1; j >=0; j--) {

        if(str[j].includes("0") || str[j].includes("1") ||str[j].includes("2") ||str[j].includes("3") ||str[j].includes("4") ||str[j].includes("5") ||str[j].includes("6") || str[j].includes("7") ||str[j].includes("8") ||str[j].includes("9") )
        arr.push(Number(str[j]));
        else arr.push(str[j]);
    }
    
    return arr;
}




/**
 * @param {Object} arr1 the fist number.
 * @param {Object} arr2 the fist number.
 * @return {object} the array of scores.
 */
function scoreExams(arr1 , arr2){
    let count = 0;
    let scores =[];
    
          for(let i=0; i<arr1.length; i++){ 
              
              for(let j = 0; j< arr1[i].length; j++){
                  if(arr1[i][j] === arr2[j]){
                        count++;     
                  } 
            }
            scores.push(count);
            count= 0;
        }
        return scores;
    }
        

   /**
 * @param {Number} num1 the fist number.
 * @param {Number} num2 the fist number.
 * @return {object} the array of scores.
 */
function generateArray(num1, num2){
let arr = [];
    for (let i = 0; i < num1; i++) {
        arr[i] =[];
        for (let j = 0; j < num2; j++) {

            arr[i][j] = (num2 * i)+(j+1);
        }
        
    }
    return arr;

}
  