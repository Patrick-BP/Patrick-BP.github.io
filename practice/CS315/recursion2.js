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

// console.log(findAllKeysWithGivenValue(simpleObject, 1))

// ======================== Question 4 ===================================
let json = {
    "glossary": {
    "title": "example glossary",
    "GlossSeeAlso": {
    "title": "S",
    "GlossList": {
    "GlossEntry": {
    "ID": "SGML",
    "SortAs": "SGML",
    "GlossSeeAlso": "Standard Generalized Markup Language",
    "Acronym": "SGML",
    "Abbrev": "ISO 8879:1986",
    "GlossDef": {
    "para": "A meta-markup language, used to create markup languages such as DocBook.",
    "GlossSeeAlso": ["GML", "XML","S"]
    },
    "GlossSee": "markup"
    }
    }
    }
    }
    }


function findValuesOfGivenKey(obj, target){
    let arr = [];
    for (const elem of Object.keys(obj)) {
        if(typeof obj[elem] ==="object" && !(Array.isArray(obj[elem]))){
                    
            arr =  arr.concat(findValuesOfGivenKey(obj[elem], "GlossSeeAlso"));
                         
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
console.log(findValuesOfGivenKey(json, "GlossSeeAlso"))



