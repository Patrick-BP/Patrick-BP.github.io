"use strict";
/* eslint-disable */

// +++++++++++++++++++++++++++++++++++++++++++++++++ PART 1 ++++++++++++++++++++++++++++++++++++++++++++
/* Sum all numbers till the given one */

function sum(n){
if(n==0){
    return 0;
}else{
    return n + sum(n-1);
}
}
console.log(sum(5));


//Calculate factorial

function factorial(n){
if(n==0){
    return 1;
}else{
    return n * factorial(n-1)
}
}
console.log(factorial(5));

// Fibonacci numbers 

function Fibonacci(n){
    if(n<=1){
        return n;
    }else{

        return Fibonacci(n-1) + Fibonacci(n-2)
    }
    }
    console.log(Fibonacci(77));


// +++++++++++++++++++++++++++++++++++++++++++++++++ PART 2 ++++++++++++++++++++++++++++++++++++++++++++


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



// ====================  Question 1 ======================



function findNamesAndValue(obj){
if(typeof obj  === "object"){

    console.log(obj.name + ":" + obj.value)
}

if(Array.isArray(obj.children)){
    obj.children.forEach(element => {
                findNamesAndValue(element); 
            });
        }

   }
  console.log(findNamesAndValue(node1)) 



// ===================== Question 2 ================== 


function ArrOfNamesAndValue(obj) {
    let arr =[];
    if (typeof obj === "object") {
        arr.push(obj.name + ":" + obj.value)
    }
    if (Array.isArray(obj.children)) {
        obj.children.forEach(element => {
            arr = arr.concat(ArrOfNamesAndValue(element));
        });
    }
return arr;
}
console.log(ArrOfNamesAndValue(node1))


//+++++++++++++++++++++++++++++++++++++++++++++++++ PART 3 ++++++++++++++++++++++++++++++++++++++++++++




// ======================= Question 1 =====================


let nodeObj = {name: "Abe", children: [{ name: "Homer", children: [{ name: "Bart", children: null }, { name: "Lisa", children: null }, { name: "Maggie", children: null }]}]};



function findNames(obj){
if(typeof obj  === "object"){
  
        console.log(obj.name)
   
}

if(Array.isArray(obj.children)){
    obj.children.forEach(element => {
                findNames(element); 
            });
        }
        
   }
  console.log(findNames(nodeObj)) 


// ======================== Question 2 ====================




function findNames(obj, target){
   
    if(obj.name === target){
        return true;
    }else if(Array.isArray(obj.children) && obj.children !== null ){
    for(let element of obj.children){
            return  findNames(element, "Lisa"); 
            }
        }else{
            return false
        }  
   }
  console.log(findNames(nodeObj, "Lisa")) 



// =================================== Question 4 ====================== 


  function ListNode(value) {
    this.name = value;
    }
    
    
    
    function generateList(root) {
    
    if (root.children == null || root.children.length == 0)
    return new ListNode(root.name);
    let linkedList = new ListNode(root.name);
    let list = linkedList;
    for (let eachChild of root.children) {
    list.next = generateList(eachChild);
    list = list.next;
    }
    return linkedList;
    }
    
    
    
    console.log(JSON.stringify(generateList(Abe)))




//==========Question 5 ==========================

function findListNode(list, target) {
    let containingList = null;
    if (list.next == null) {
        if (list.name == target) {
            containingList = list;
        }
    } else {
        if (list.name == target) {
            containingList = list;
        } else {
            containingList = findListNode(list.next, target);
        }
    }
    return containingList;
}

console.log(findListNode(abe, "Patrick"));

//==============Question 6 ================

function treeModifier(tree, modifierFunc) {
    if (tree.children == null) {
        modifierFunc(tree);
    } else {
        modifierFunc(tree);
        for (let element of tree.children) {
            treeModifier(element, modifierFunc);
        }
    }
    return tree;
}

function allCaps(node) {
    node.name = node.name.toUpperCase();
    return node;
}
function addStars(node) {
    node.name = "***" + node.name + "***";
    return node;
}
function reverseNode(node) {
    let newName = [];
    let arrayName = node.name.split("");
    for (let element of arrayName) {
        newName.unshift(element);
    }
    node.name = newName.join("");
    return node;
}

 console.log(treeModifier(Abe, allCaps))
console.log(treeModifier(Abe, addStars))
console.log(treeModifier(Abe, reverseNode))

//====================Question 7================================


let valuesArr = [];
function treeCollector(tree) {
    if (Array.isArray(tree.children)) {
        valuesArr.push(tree.name);
        for (let element of tree.children) {
            treeCollector(element);
        }
    } else {
        valuesArr.push(tree.name);
    }
    return valuesArr;
}
console.log(treeCollector(Abe));