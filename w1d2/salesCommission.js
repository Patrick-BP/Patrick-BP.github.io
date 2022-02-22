"use strict";
let message = "";
/** 
* Adds two numbers together.
* @param {boolean} isSalaried The first number.
* @param {int} salesAmount The second number.
* @returns {int} The sum of the two numbers.
*/
function computerSalesCommision(isSalaried , salesAmount){
    if(isSalaried){
        if(salesAmount < 300){
            message = "there is no commission";
        }else if(salesAmount > 300 && salesAmount < 500){
            message = salesAmount * 0.01;
        }else{
            message = salesAmount *
        }

    }

}
