"use strict";
/* eslint-disable */ 

let input = document.querySelector("input");
let textArea = document.querySelector("textarea");
let buttons = document.getElementsByTagName("button")[0];


buttons.onclick = add;

function add(){
textArea.append(input.value + "\n");
input.value = " ";
}




// my calculator =========================

let firstValue = document.getElementById("first");
let secondValue = document.getElementById("second");
let result = document.getElementById("result");

function adds(){
result.innerText = ( Number(firstValue.value) + Number(secondValue.value))
}
function sub(){
    result.innerText = ( Number(firstValue.value) - Number(secondValue.value))
}
function mult(){
    result.innerText = ( Number(firstValue.value) * Number(secondValue.value))
}

// Inventory =========================

let pName =  document.getElementById("comp");
let category =  document.getElementById("cate");
let quantity =  document.getElementById("qty");
let inTable =  document.querySelector("table");
function addItems(){
    let tr = document.createElement("tr")
    inTable.append(tr)
    tr.innerHTML = "<td>" + pName.value + "</td><td>" + category.value + "</td><td>" + quantity.value + "</td>" 
}