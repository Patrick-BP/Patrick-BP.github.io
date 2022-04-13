"use strict";
/* eslint-disable */

let simpleObject = {a:1, b:2,c:{a:[1,2]}};

// ======================== Question 1 ========================
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

//==================== Question 2 =========================

// function listLeaves(obj){
// let arr =[];
// for (const elem of Object.keys(obj)) {
//             if(typeof obj[elem] ==="object" && !(Array.isArray(obj[elem]))){
            
//                arr =  arr.concat(listLeaves(obj[elem]));
                 
//             } else{
//                 arr.push({[elem]: obj[elem]}); 
//             }  
//         }
//         return arr;
// }
// console.log(listLeaves(simpleObject));


// ======================== Question 3 ===================================

// function findAllKeysWithGivenValue(obj, target){
//     let arr = [];
//     for (const elem of Object.keys(obj)) {
//         if(typeof obj[elem] ==="object" && !(Array.isArray(obj[elem]))){
                    
//             arr =  arr.concat(findAllKeysWithGivenValue(obj[elem], 1));
                         
//             } else{
//                 if(obj[elem] === target){
//                      arr.push(elem);
//                 }else if(Array.isArray(obj[elem])){
//                     for(let el of obj[elem]){
                        
//                         if(el == target){
//                             arr.push(elem);
//                         }
//                     }
//                 }
            
//             }  
//         }
//         return arr;
// }

//console.log(findAllKeysWithGivenValue(simpleObject, 1))



function findValuesOfGivenKey(obj, target){
    let arr = [];
    for (const elem of Object.keys(obj)) {
        if(typeof obj[elem] ==="object" && !(Array.isArray(obj[elem]))){
                    
            arr =  arr.concat(findValuesOfGivenKey(obj[elem], "a"));
                         
            } else{
                if(elem === target){
                     arr.push(obj[elem]);
                }else if(Array.isArray(obj[elem])){
                        if(elem == target){
                            arr.push(obj[elem]);
                        }
                    
                }
            
            }  
        }
        return arr;
}
console.log(findValuesOfGivenKey(simpleObject, "a"))