/*                        Defining Table 

          Input                                      Processing                            Output
   -----------------------------------------------------------------------------------------------------
       prompt user:           |     - if cost less than 50k then                 |    down payment amount
                              |       compute 5% of the cost                     |
       - house cost           |     - if cost is between $50K and 100K then      |
                              |       compute 1000 + 10% of (cost - $50K)        |              
                              |     - if cost is between 100K and 200K then      | 
                              |          compute 2000 + 15% of (cost - $100K)    |
                              |      - if cost is above 200k then                |
                              |         compute $5000 + 10% of (cost - $200K)    |

    */ 


const prompt = require("prompt-sync")();
let cost = prompt("Enter the price of the house: ");

let message = "";
if(cost < 50000){
    message = "the down payment is: " + (cost *0.05);
}else if(cost > 50000 && cost < 100000){
    message = "the down payment is: " + (((cost-50000) * 0.1) + 1000);
}else if(cost > 100000 && cost < 200000){
    message = "the down payment is: " + (((cost-100000) * 0.15) + 2000);
}else{
    message = "the down payment is: " + (((cost-200000) * 0.1) + 5000);
}
console.log(message);
