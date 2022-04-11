"use strict";
/* eslint-disable */

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
   let node4 = {
    name: "label",
    value: "Name",
    children: null
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    value: null,
    children: [node2, node3],
   
   };

// =================================== part 2 Question 1 ======================

// function findNamesAndValue(obj){
// let arr =[];
// if(typeof obj  === "object"){

//     console.log(obj.name + ":" + obj.value)
// }

// if(Array.isArray(obj.children)){
//     obj.children.forEach(element => {
//                 findNamesAndValue(element); 
//             });
//         }
        
//    }
//   console.log(findNamesAndValue(node1)) 

// ===================================part 2 Question 2 ====================== NOT WORKING

// function ArrOfNamesAndValue(obj){
//     let arr=[];
//     if(typeof obj  === "object"){
//      arr.push(obj.name + ":" + obj.value)
    
//     if(!(obj.children === 'null')){
//         for(let element of obj.children){
//             findNamesAndValue(element)
//         }
        
//     }
    
//     }

//     console.log(findNamesAndValue(node1)) 






// ===================================part 3 Question 1 ====================== NOT WORKING


// let nodeObj = {name: "Abe", children: [{ name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]};



// function findNames(obj){
// if(typeof obj  === "object"){
  
//         console.log(obj.name)
   
// }

// if(Array.isArray(obj.children)){
//     obj.children.forEach(element => {
//                 findNames(element); 
//             });
//         }
        
//    }
//   console.log(findNames(nodeObj)) 





// ===================================part 3 Question 2 ====================== NOT WORKING


// let nodeObj = {name: "Abe", children: [{ name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]};



// function findNames(obj, target){
// if(typeof obj  === "object"){
//     if(obj.name === target){
//         console.log("true")
//     }else{
//         console.log(obj.name)
//     }
   
// }

// if(Array.isArray(obj.children)){
//     obj.children.forEach(element => {
//                 findNames(element); 
//             });
//         }
        
//    }
//   console.log(findNames(nodeObj, "Lisa")) 


// ===================================part 3 Question 4 ====================== 
// let nodeObj = {name: "Abe", children: [{ name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]};
// function ListNode(obj){

// }

// let newObj = {name: "Abe", next: {name: "Homer", next: {name: "Bart", next:{ name: "Lisa", next:{name: "Maggie"}}}}}; 


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

//  console.log(printName(Abe));


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

// function Fibonacci(n){
//     if(n<=1){
//         return n;
//     }else{
     
//         return Fibonacci(n-1) + Fibonacci(n-2)
//     }
//     }
//     console.log(Fibonacci(77));





function ListNode(node) {
    let obj = {};
    if (node.children == null) {
        
        obj.next = { name: node.name, next: null };
} else {
    obj.name = node.name;
    obj.next = node.next
    for (let element of node.children) {
        ListNode(element);
        
    }
}
return obj;
}

let Abe = {name: "Abe",children: [{name: "Homer",children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]}


let newObj = ListNode(Abe);console.log(newObj);





