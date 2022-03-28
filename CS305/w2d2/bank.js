"use strict";
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d/  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.

*/

const bank = {
    transactionsDB: [],
};
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


bank.saveTransaction = function (id, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(amount);

};

bank.debit = function (id, amount) {
    if(bank.getBalance(id) > amount){
    let customer =  this.transactionsDB.find(customer => customer.customerId === id);
    customer.customerTransactions.push(-amount);
    return customer;
    }
    
    /* make sure current balance is > amount */
//IMPLEMENT THIS
};

bank.credit = function (id, amount) {
    this.saveTransaction(id, amount);
};

bank.getBalance = function (id) {
    let balance
    let customer =  this.transactionsDB.find(customer => customer.customerId === id);
    balance = customer.customerTransactions.reduce((sum , current) => sum + current);
   return balance;
};

/**
 * @returns {number}  returns sum of all balances
 */
bank.bankBalance = function () {
    let sum = 0;
    let sumArr =[];
    for (const transact of this.transactionsDB) {
        sum =0;
        let transaction = transact.customerTransactions;
        for (const elem of transaction) {
            sum += elem;  
        }
        sumArr.push(sum);
    }
    sum = 0;
    sum = sumArr.reduce((sum , current) => sum + current);
    return sum;
    
//IMPLEMENT THIS
};



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
/* must be at end of file if are exporting an object so the export is after the definition */
module.exports = {bank}; //add all of your object names here that you need for the node mocha tests