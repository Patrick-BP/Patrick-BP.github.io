"use strict";
let message = "";
/** 
* 
* @param {boolean} isSalaried The first number.
* @param {int} salesAmount The second number.
* @returns {int} The commission.
*/
function computeSalesCommission(isSalaried , salesAmount){
    if(isSalaried){
        if(salesAmount < 300){
            return "there is no commission";
        }else if(salesAmount >= 300 && salesAmount <= 500){
            return salesAmount * 0.01;
        }else{
            return ((salesAmount - 500)*0.02) + (500 *0.01);
        }

    }else{
        if(salesAmount < 300){
            return "there is no commission";
        }else if(salesAmount >= 300 && salesAmount <= 500){
            return salesAmount * 0.02;
        }else{
            return ((salesAmount - 500)*0.03) + (500 *0.02);
        }

    }

}

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));