"use strict";
/* eslint-disable */
let itemName = document.getElementById("comp");
let itemCateg = document.getElementById("cate");
let itemQty = document.getElementById("qty");
let itemRating = document.getElementById("rating");
let tab = document.getElementById("tab");
let row = document.querySelector("tr");


row.onmouseover = function (){backgroundchange();}
row.onmouseout = function (){backgroundchange2();}

function backgroundchange(){
    row.className = "trHover";
} 
function backgroundchange2(){
    row.className = "";
} 

let addbtn = document.getElementById("btnAdd");
let editbtn = document.getElementById("btnEdit");
let removebtn = document.getElementById("btnRemove");

addbtn.onclick = addItem;

function addItem(){

    if(itemName.value === " "){
        itemName.className = "alert";
        alert("Name can't be empty");
        return;
    }

   else if(itemCateg.value === " "){
        itemCateg.className = "alert";
        alert("Category can't be empty");
        return;
    }
   else if(isNaN(parseInt(itemQty.value)) || itemQty.value === " "){
        itemQty.className = "alert";
        alert("Quantity should be a number");
        return;
    }

   else if(itemRating.value === " "){
        itemRating.className = "alert";
        alert("Rating can't be empty");
        return;
    }else{
        itemName.className = " "; 
        itemRating.className = " "; 
        itemCateg.className = " "; 
        itemQty.className = " "; 

    let tr = document.createElement("tr");
    tab.append(tr);
    tr.innerHTML = "<td>" + itemName.value + "</td><td>" + itemCateg.value + "</td><td>" + itemQty.value + "</td><td>" + itemRating.value + "</td><td><button  id='btnEdit'> Edit </button></td><td><button onclick = 'deleteThisrow(this)'> Remove </button> </td>" ;


    // itemCateg.value = " ";
    // itemName.value = " ";
    // itemQty.value = " ";
    // itemRating.value =" ";
}
    }
function deleteThisrow(x){
    let index = x.parentNode.parentNode.rowIndex;
    tab.deleteRow(index);

}

  
function editItem(){}
function removeItem(){}
