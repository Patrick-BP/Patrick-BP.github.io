"use strict";
/* eslint-disable */
let Abe = {
    name: "Abe",
    children: [{ name: "Homer", children: [{ name: "bart" }, { name: "Lisa" }, { name: "Maggie" }] }]
}

//Question1
// function printName(node) {
//     for (let key in node) {
//         if (Array.isArray(node[key])) {
//             node[key].forEach(element => {
//               return printName(element)
//             });
//         } else {
//            console.log(node[key]) ;
//         }
//     }
// }

// console.log(printName(Abe));


// function findTarget(node, target) {
//     if (Array.isArray(node.children)) {
//         for (let key in node.children) {
//             findTarget(key)
//         }
//         if(node.name == target){
//             return true;
//         }else{
//             return false;
//         }   
//     } else {
//         if(node.name == target){
//             return true;
//         }else{
//             return false;
//         }
        
//     }

// }
// findTarget(Abe, "Lisa");




//Sum all numbers till the given one

// function sum(n){
// if(n==0){
//     return 0;
// }else{
//     return n + sum(n-1);
// }
// }
// console.log(sum(5));


//Calculate factorial

// function factorial(n){
// if(n==0){
//     return 1;
// }else{
//     return n * factorial(n-1)
// }
// }
// console.log(factorial(5));

//Fibonacci numbers (the dynamic programming solution is optional)

function Fibonacci(n){
    if(n<=1){
        return n;
    }else{
     
        return Fibonacci(n-1) + Fibonacci(n-2)
    }
    }
    console.log(Fibonacci(77));