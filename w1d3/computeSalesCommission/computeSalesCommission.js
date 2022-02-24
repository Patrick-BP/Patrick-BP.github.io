"use strict";
module.exports = {computeSalesCommission};
/** 
* 
* @param {boolean} isSalaried The first number.
* @param {int} salesAmount The second number.
* @returns {int} The commission.
*/
function computeSalesCommission(isSalaried , salesAmount){
    if(isSalaried){
        if(salesAmount < 300){
            return 0;
        }else if(salesAmount >= 300 && salesAmount <= 500){
            return salesAmount * 0.01;
        }else{
            return ((salesAmount - 500)*0.02) + (500 *0.01);
        }

    }else{
        if(salesAmount < 300){
            return 0;
        }else if(salesAmount >= 300 && salesAmount <= 500){
            return salesAmount * 0.02;
        }else{
            return ((salesAmount - 500)*0.03) + (500 *0.02);
        }

    }

}

