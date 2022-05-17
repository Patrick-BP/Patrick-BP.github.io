"use strict";
/* eslint-disable */

// Array.prototype.newReverse = function(){
   
//   let  arr = this;
//      console.log(arr.reverse()); 

// };

// Array.prototype.newReverse = async function(){
//     let  arr = this;
//       let response = await arr.reverse(); 
//   console.log(response);
//   };

Array.prototype.newReverse =function(){ 
    let  arr = this;
new Promise(function(resolve, reject){
 resolve(arr.reverse())
}).then(console.log);

} 
console.log('start');
[1, 3, 6, 2].newReverse();
console.log('end');