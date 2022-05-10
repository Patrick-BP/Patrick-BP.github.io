"use strict";
/* eslint-disable */

let input1 = document.getElementById("num1");
let op = document.getElementById("op");
let input2 = document.getElementById("num2");
let result = document.getElementById("result");
let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    
    for (const option of op.options) {
       
        if(option.selected){
            if(option.value === "+"){
                result.value =   Number(input1.value) + Number(input2.value);
 
                }else if(option.value === "-"){
                    result.value =  Number(input1.value) - Number(input2.value);
                }else if(option.value === "*"){
                    result.value =  Number(input1.value) * Number(input2.value);
                }else if(option.value === "/"){
                    result.value =  Number(input1.value) / Number(input2.value);
                }else{
                    
                    result.value =  "Please use +, -, * or / operators";

                }
        }
    }
    
});