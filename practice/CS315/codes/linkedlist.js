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
    children: [node2, node3],
    value: null,
   };
   /* 
body: null
div: null
label: Name
input: this was typed by a user
p: This is text in the a paragraph
*/
//    function printNameValue(obj){
//     console.log(obj.name +":"+ obj.value) ;
//         if(obj.children !== null && Array.isArray(obj.children)){
//             for (const element of obj.children) {
//                 printNameValue(element)
//             }
//         }
//    }
//    printNameValue(node1)


//['body:null', 'div:null', 'label:Name', 'input:this was typed by a user', 'p:This is text in the a paragraph' ]
//    function printArrayOfNameValue(obj){
//     let arr =[];
//     arr.push(obj.name +":"+ obj.value) ;
//         if(obj.children !== null && Array.isArray(obj.children)){
//             for (const element of obj.children) {
//                arr = arr.concat(printArrayOfNameValue(element)) 
//             }
//         }
//         return arr
//    }
//   console.log(printArrayOfNameValue(node1)) 



// function printNodesNames(obj){
// console.log(obj.name);
// if (obj.children !== null && Array.isArray(obj.children)) {
//     for (const elem of obj.children) {
//         printNodesNames(elem)
//     }
// }
// }
// printNodesNames(treenobe);



function TreeNode(value){
    this.value = value;
    this.descendent = [];
}



// function contains(obj, target){
    
//     if(obj.value === target){ 
//         return  true;
//     }
//         for (const child of obj.descendent) {
//         let found = contains(child, "Lisa")
//         if(found){
//             return true
//         }
//         }
    
//     return false
//     }
//     console.log(contains(Abe, "Lisa"));
let Abe = new TreeNode("Abe");
let Homer = new TreeNode("Homer");
let Bart = new TreeNode("Bart");
let Lisa = new TreeNode("Lisa")
let Maggie = new TreeNode("Maggie")

Abe.descendent.push(Homer);
Homer.descendent.push(Bart, Lisa, Maggie);

// function contains(obj, target){
    
//     if(obj.value === target){ 
        
//         return  obj;
//     }
//         for (const child of obj.descendent) {
//         let found = contains(child, "Lisa")
//         if(found){
            
//             return found
//         }
//         }
    
//     return null
//     }
//     console.log(contains(Abe, "Lisa"));
let list = {value:"Abe", next:{value:"Homer", next:{value:"Bart", next:{value:"Lisa", next:{value:"Maggie"}}}}};


// function ListNode(value){
//     this.value = value;
// }
//  function generateList(obj){
//     let linkedList = new ListNode(obj.value);
//     let list = linkedList;
//     for (const child of obj.descendent) {
//         list.next = generateList(child);
//         list =  list.next
    
//     }
// return linkedList
//  } 

//  let linkedList = generateList(Abe);
// console.log(linkedList);

function findNode(list, target){
    if(list == null){
        return null
    }
    if(list.value === target){
        return list;
    }
   
     return   findNode(list.next, target)

}
console.log(findNode(list, "Bart"))


function treeModifier(tree, func){

}