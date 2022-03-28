/*                        Defining Table 

          Input                  Processing                            Output
   --------------------------------------------------------------------------------------------
       prompt user:           |  compute compound intrest monthly              |   monthly compound
        - initial Amount      |   - calculate monthly interest by              |
        - annual Intrest Rate | dividing annual interest rate by 12 and 100    |
        - number of year to   |     - loop through balance times monthly       |              
            compound          |     interest until the number months           | 
                                    is reached
*/          

"use strict";

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


console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));