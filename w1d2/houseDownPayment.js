"use strict";
/** 
* 
* @param {int} cost The first number.
* @returns {int} The house down payment.
*/
function calcDownpayment(cost){
if(cost < 50000){
    return (cost * 0.05);
}else if(cost >= 50000 && cost < 100000){
    return (((cost-50000) * 0.1) + 2500);
}else if(cost >= 100000 && cost < 200000){
    return  (((cost-100000) * 0.15) + 7500);
}else{
    return (((cost-200000) * 0.1) + 20000);
}
}

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));