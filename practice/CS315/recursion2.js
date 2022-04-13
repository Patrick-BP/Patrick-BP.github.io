"use strict";
/* eslint-disable */

let simpleObject = {a:1, b:2,c:{a:[1,2]}};

//  function countKeys(obj){
//    let count= 1;
//     for (const elem of Object.keys(obj)) {
//         if(typeof obj[elem] ==="object"){
//             if((Array.isArray(obj[elem]))){
//                 continue;
//             }else{
//              count +=  countKeys(obj[elem]);
//             }  
//         } 
//          count++; 
//     }
//    return count;
//  }
// console.log(countKeys(simpleObject));

function listLeaves(obj){
let arr =[];
for (const elem of Object.keys(obj)) {
            if(typeof obj[elem] ==="object" && !(Array.isArray(obj[elem]))){
            
               arr =  arr.concat(listLeaves(obj[elem]));
                 
            } else{
                arr.push({[elem]: obj[elem]}); 
            }  
        }
        return arr;
}
console.log(listLeaves(simpleObject));