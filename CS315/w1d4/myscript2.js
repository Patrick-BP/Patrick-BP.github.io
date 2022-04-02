"use strict";
/* eslint-disable */
let itemName = document.getElementById("comp");
let itemCateg = document.getElementById("cate");
let itemQty = document.getElementById("qty");
let itemRating = document.getElementById("rating");


let dataArr = [];


let addbtn = document.getElementById("btnAdd");
let savebtn = document.getElementById("btnSave");
let editbtn = document.getElementById("btnEdit");
let removebtn = document.getElementById("btnRemove");



window.onload = function(){
    loadData(dataArr);
}

function loadData(dataArr){
    let tbody = document.getElementById("trdata");
    tbody.innerHTML = ""
    dataArr.forEach(element => {
        let newtr = document.createElement("tr");
        tbody.append(newtr);
        newtr.innerHTML = `<td>${element.name}</td><td>${element.category}</td><td>${element.quantity}</td><td>${element.rating}</td><td><button onclick="editRow(this)">Edit</button></td><td><button onclick="deleteRow(this)">Delete</button></td>`;

    });

}
addbtn.onclick = addItem;
savebtn.onclick = save;

function deleteRow(obj){
    let index = (obj.parentNode.parentNode.rowIndex)-1;
    dataArr.splice(index, 1)
    loadData(dataArr)

}
let index;
function editRow(obj){
     index = (obj.parentNode.parentNode.rowIndex)-1;
    itemName.value = dataArr[index].name;
    itemCateg.value = dataArr[index].category;
    itemQty.value = dataArr[index].quantity;
    itemRating.value =  dataArr[index].rating ;
}

function save(){
    dataArr[index].name = itemName.value ;
    dataArr[index].category = itemCateg.value;
    dataArr[index].quantity = itemQty.value;
    dataArr[index].rating = itemRating.value;
    
    loadData(dataArr)


    itemCateg.value = " ";
    itemName.value = " ";
    itemQty.value = " ";
    itemRating.value =" ";
}


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
    dataArr.push({name:itemName.value, category:itemCateg.value, quantity:itemQty.value, rating:itemRating.value});
    loadData(dataArr);
    itemCateg.value = " ";
    itemName.value = " ";
    itemQty.value = " ";
    itemRating.value =" ";
    }
    
}

let selectSort = document.getElementsByName("sort")[0];
selectSort.onchange = sortItems; 


let selectFilter = document.getElementsByName("filter")[0];
selectFilter.onchange = filterItems; 

function sortItems(){
    let sortOption = selectSort.children;
for (const option of sortOption) {
    if(option.selected){
        if(option.innerText === "Name"){

            let newdataArr =  dataArr.sort((a, b) => {
                if(a.name > b.name){return 1}
                else if(a.name < b.name){return -1}
                else{return 0}
            } );

            loadData(newdataArr)
        }else if(option.innerText === "Quantity"){
            let newdataArr =  dataArr.sort((a, b) => b.quantity - a.quantity );

            loadData(newdataArr)

        }else{
            loadData(dataArr)
        }
        
    }
}
}


function filterItems(){
    let filterOption = selectFilter.children;
for (const option of filterOption) {
    if(option.selected){
        if(option.innerText === "Quantity"){

            let newdataArr =  dataArr.filter(item => item.quantity > 100);
            loadData(newdataArr)


        }else if(option.innerText === "Rating"){
            let newdataArr =  dataArr.filter(item => item.rating > 4);
            loadData(newdataArr)

        }else{
            loadData(dataArr)
        }
        
    }
}
}
