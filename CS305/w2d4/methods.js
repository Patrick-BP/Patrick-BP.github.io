"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {arrey} arr array
 * @param {number} a num1
 * @param {number} b num2
 * @return {array} array
 */
function filterRange(arr, a, b) {
  let arr1 =[];
  for (const elm of arr) {
    if(elm >=a && elm <=b){
      arr1.push(elm);
    }
    
  }
  return arr1;
  }

  
 /**
 * 
 * @param {arrey} arr array
 * @param {number} a num1
 * @param {number} b num2
 * @return {array} array
 */
  function filterRangeInPlace(arr, a, b) {
    
    for (let i = 0 ; i<arr.length; i++) {
      if(!(arr[i] >= a && arr[i] <= b)){
        arr.splice(i, 1);
      }
      
    }
    
  }
/**
 * @param {*} str string
   * @return {*} return
   */
  
 
  /**
   * @return {*} return
   */
  function Calculator() {
    this["+"] = (a,b)=>+a + +b,
    this["-"] = (a,b)=>+a - +b,
    this["/"] = (a,b)=>+a / +b,
    this["*"] = (a,b)=>+a * +b,
    this["**"] = (a,b)=> Math.pow(+a , +b),
    
    this.calculate = function (str){
      let arr = str.split(" ");
      for (const key in this) {
        if (key === arr[1]) {
          return this[key](arr[0], arr[2]);
          
        }
      }

    },
this.addMethod = function(str, func){
      for (const key in this) {
        if (key === str) {
           func = this[key]();
          
        }
    }

  };
}
  /**
   * 
   * @param {*} arr input an array
   * @return {*} return an array 
   */
  function unique(arr) {
   let arr2 = [];
   for (const elm of arr) {
     if(!(arr2.includes(elm))){
        arr2.push(elm);
     }
   }
   return arr2;
  }
  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  /**
   * 
   * @param {*} array input array
   * @return {*} return objects
   */
  function groupById(array) {
    return array.reduce((item, elem) => {
      item[elem.id] = elem;
      return item;
    }, {});
    
  }
console.log(groupById(users));
 