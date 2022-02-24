"use strict";
module.exports = {compoundInterest};
/** 
* 
* @param {Number} initialAmount The first number.
* @param {Number} annualInterestRate The second number.
* @param {Number} numYearCompound the third number.
* @return {Number} The compound Interest.
*/
function compoundInterest (initialAmount, annualInterestRate, numYearCompound){
    let balance = initialAmount;
    let monthlyInterest = annualInterestRate / 100 / 12;
    let numOfMonths = numYearCompound * 12;
    
    for (let i = 1; i <= numOfMonths; i++) {
    
    balance += (balance * monthlyInterest);
    
    }
    
    return balance.toFixed(2);
      
}

