/*                        Defining Table 

          Input                  Processing                            Output
   --------------------------------------------------------------------------------------------
       prompt user:           |  compute compound intrest monthly      |   monthly compound
        - initial Amount      |   - multiply initial amount by         |
        - annual Intrest Rate |    annual intrest Rate power of number |
        - number of year to   |    of years compound  minus initial    |              
            compound          |      amount                            | 

*/          


"use strict";

const prompt = require("prompt-sync")();
let initialAmount = prompt("Enter the initial amount: ");
let annualIntrestRate = prompt("Enter the annuel interest Rate: ");
let numberOfYearsCompound = prompt("Enter number of years of compound: ");

let monthlyCompound = (initialAmount * (1 + (annualIntrestRate/12)**(numberOfYearsCompound*12)))- initialAmount;

console.log(monthlyCompound);
