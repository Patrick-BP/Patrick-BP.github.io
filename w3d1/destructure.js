"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests
let salaries = {
  "John": 100,
  "Pete": 50,
  "Mary": 250
};

function topSalary(salaries) {
  let max = 0;
  let name = null;

  if (Object.entries(salaries).length == 0) {
    return null;
  } else {
    for (const [key, value] of Object.entries(salaries)) {
      if (max < value) {
        max = value;
        name = key;
      }
    }
  }
  return name;
}
// json this can be used to clone objects
function clone(obj) {
  let json = JSON.stringify(obj);
  console.log(json);
  return JSON.parse(json);
}

// setInterval
function printNumbers(from, to){
  let timerId = setInterval(()=>{
 console.log(from)
  if(from === to){
    clearInterval(timerId);
  }
    from++;
}, 1000);

}
console.log(printNumbers(5,10))


//setTimeout 

function printNumbers2(from, to) {
  let num = from;
  setTimeout(function fun1() {
    console.log(num);
    if (num < to) {
      setTimeout(fun1, 1000);
    }
    num++;
  }, 1000);

}

console.log(printNumbers2(5, 10));




//What will setTimeout show?

let i = 0;

setTimeout(() => alert(i), 100); // 100000000
for(let j = 0; j < 100000000; j++) {
  i++;
}