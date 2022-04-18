"use strict";
/* eslint-disable */

// let str = "chadia";

// function countLetters(str, target){
//     if(str === ""){
//         return 0;
//     }else{
//         if(str.charAt(0)=== target){
//             return 1+ countLetters(str.substring(1), target)
//         }
//        return 0 + countLetters(str.substring(1), target)
//     }
// }
// console.log(countLetters(str, "a"));

// function TreeNode(value){
//     this.value = value;
//     this.descendent = [];
// }

// let president = new TreeNode("President");
// let administrationvp = new TreeNode("administrationvp")
// let investmentvp = new TreeNode("investmentvp")
// let finacialM = new TreeNode("finacial Manager")
// let Hr = new TreeNode("Hr Manager")
// let Reseach = new TreeNode("Reseach Director")

// president.descendent.push(administrationvp, investmentvp);
// administrationvp.descendent.push(finacialM, Hr);
// investmentvp.descendent.push(Reseach)
//console.log(president)



let tree = {"value":"President","descendent":[
    {"value":"administrationvp","descendent":[
        {"value":"finacial Manager","descendent":[]},{"value":"Hr Manager","descendent":[]}
    ]},{"value":"investmentvp","descendent":[{"value":"Reseach Director","descendent":[]}]}
]}

// function countNode(tree){

//  let count = 0;
 
//  for (const child of tree.descendent) {
//     count++ 
//     count +=  countNode(child)
     
//  }
// return count

// }
//  console.log(countNode(tree))
function ListNode(value){
    this.value = value
}
function findLeafNode(tree){
   ;
if(tree.descendent.length==0){
 var newlist = new ListNode(tree.value);
var list = newlist
}
for (const child of tree.descendent) {
    list.next = findLeafNode(child)
    list = list.next
}
return newlist
}
let linkedList = findLeafNode(tree)
console.log(linkedList)