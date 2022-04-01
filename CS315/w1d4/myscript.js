"use strict";
/* eslint-disable */
let itemName = document.getElementById("comp");
let itemCateg = document.getElementById("cate");
let itemQty = document.getElementById("qty");
let itemRating = document.getElementById("rating");
let tab = document.getElementById("tab");
let row = document.querySelectorAll("tr");
let tableArr = [];
let newarr = []
row.onmouseover = function (){backgroundchange();}
row.onmouseout = function (){backgroundchange2();}

function backgroundchange(){
    row.className = "trHover";
} 
function backgroundchange2(){
    row.className = "";
} 

let addbtn = document.getElementById("btnAdd");
let savebtn = document.getElementById("btnSave");
let editbtn = document.getElementById("btnEdit");
let removebtn = document.getElementById("btnRemove");

addbtn.onclick = addItem;
savebtn.onclick = save;

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

        tableArr.push({name:itemName.value, categ:itemCateg.value, qty:itemQty.value, rating:itemRating.value });
        
        
        // for (const elem of tableArr) {
            
            let tr = document.createElement("tr");
            tab.append(tr);
            tr.innerHTML += `<td> ${itemName.value}  </td><td>  ${itemCateg.value} </td><td> ${itemQty.value} </td><td>  ${itemRating.value } </td><td><button onclick='editThisItem(this)' id='btnEdit'> Edit </button></td><td><button onclick = 'deleteThisrow(this)'> Remove </button> </td>` ;
        
        // }
        

    // itemCateg.value = " ";
    // itemName.value = " ";
    // itemQty.value = " ";
    // itemRating.value =" ";
    }
    }

   
    
function deleteThisrow(x){
    let index = x.parentNode.parentNode.rowIndex;
    tableArr = tableArr.splice(index, 1)
    //tab.deleteRow(index);
    console.log(tableArr)

}

let index ;
function editThisItem(x){
    index = x.parentNode.parentNode.children;

    itemName.value = index[0].innerText;
    itemCateg.value = index[1].innerText;
    itemQty.value = index[2].innerText;
    itemRating.value = index[3].innerText;    
}

function save(){
    index[0].innerText = itemName.value;
    index[1].innerText = itemCateg.value;
    index[2].innerText = itemQty.value;
    index[3].innerText = itemRating.value;


    // itemCateg.value = " ";
    // itemName.value = " ";
    // itemQty.value = " ";
    // itemRating.value =" ";
}


let sortEl = document.getElementsByName("sort")[0];
console.log(sortEl)
let filterEl = document.getElementsByName("filter")[0];
console.log(filterEl)

sortEl.onchange = mySort;
filterEl.onchange = myFilter;

function mySort(){
    for (const option of sortEl.options) {
        if(option.selected){
           if(option.value === "Quantity"){
           newarr =  tableArr.sort((x, y)=> y.qty - x.qty );
            
           }else{
        newarr = tableArr.sort(function(x, y) {
        if (x.name < y.name) {
        return -1;
        }
        if (y.name > x.name) {
        return 1;
        }
        return 0;
        });
       
           }
           
           let child = document.querySelectorAll("tr");
           for (const elem of child) {
               elem.remove()
           }
           
           let tr2 = document.createElement("tr");
               tab.prepend(tr2)
               tr2.innerHTML = "<td>Product Name</td><td>  Category </td><td> Quantity </td><td>  Ratings </td>" ;
           for(let elem of newarr){
               let tr = document.createElement("tr");
               
           tab.append(tr);
           tr.innerHTML += `<td> ${elem.name}  </td><td>  ${elem.categ} </td><td> ${elem.qty} </td><td>  ${elem.rating} </td><td><button onclick='editThisItem(this)' id='btnEdit'> Edit </button></td><td><button onclick = 'deleteThisrow(this)'> Remove </button> </td>` ;
       
          }
           

         
          
        }
    }
    

}
function myFilter(){

}