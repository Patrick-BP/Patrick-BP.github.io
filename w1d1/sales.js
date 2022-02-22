"use strict";

const prompt = require("prompt-sync")();
let sales = prompt("Enter the sales amount: ");
let isSalaried = true;

let message ="";


if(isSalaried){
    if(sales < 300){
        message = "there is no commission" ;
    } 
    else if (sales < 500 && sales > 300){
        message =  (sales*1)/100;
    }
 
    else{
        message = (sales*2)/100 ;
    }

}
else {
    if(sales > 300 && sales < 500){
        message = (sales*2)/100;
    }else {
        message = (sales*3)/100;
    }

}


