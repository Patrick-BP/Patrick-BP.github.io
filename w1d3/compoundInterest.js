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

const assert = require("assert");
describe("compoundInterest", function () {
    it("the monthly compound of : ", function () {
        assert.equal(compoundInterest(100, 10, 1), 110.47);
    });
    it("", function () {
        assert.equal(compoundInterest(10000, 5, 10), 16470.09);
    });
});