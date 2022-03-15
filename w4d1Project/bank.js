"use strict";
/* eslint-disable */
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 

class Bank{
    constructor(){
      this._accounts = []; 
    }
    static nextNumber = 1;
    addAccount(){
     let accNumber = Bank.nextNumber;
     Bank.nextNumber++;
     this._accounts.push(new Account(accNumber));
      return accNumber;
    }
    addSavingsAccount(interest){
    let accNumber = Bank.nextNumber;
     Bank.nextNumber++;
     this._accounts.push(new SavingsAccount(accNumber, interest));
      return accNumber;
    }
    addCheckingAccount(overdraft){
        let accNumber = Bank.nextNumber;
     Bank.nextNumber++;
     this._accounts.push(new CheckingAccount(accNumber, overdraft));
      return accNumber;
    }
    closeAccount(number){
      let acc = this._accounts.find(item => item.getNumber() === number);
      let accindex = this._accounts.indexOf(acc);
      this._accounts.splice(accindex, 1);
        }
     
    
   accountReport(){
    let report ="";
       for (let i=0; i< this._accounts.length; i++) {
           
           if('_interest' in this._accounts[i] ){
               
            
            report += `SavingsAccount ${this._accounts[i].getNumber()}: balance: ${this._accounts[i].getBalance()} interest: ${this._accounts[i].getInterest()}`;

           }else{
          
            report += `\nCheckingAccount ${this._accounts[i].getNumber()}: balance: ${this._accounts[i].getBalance()} overdraft limit: ${this._accounts[i].getOverdraft()}\n`  ;
            
           }
     
       }
       return report;
   } 

   endOfMonth(){
       let report ="";
       for (let i=0; i< this._accounts.length; i++) {
        
           if('_interest' in this._accounts[i] ){
            
            report += `Interest added SavingsAccount ${this._accounts[i].getNumber()}: balance: ${this._accounts[i].addInterest()} interest: ${this._accounts[i].getInterest()}`;

           }else{
               if(this._accounts[i].getBalance() < 0){
                report += `\nWarning, low balance CheckingAccount ${this._accounts[i].getNumber()}: balance: ${this._accounts[i].getBalance()} overdraft limit: ${this._accounts[i]._overdraft}\n`  ;

               }else{
                report += `\nCheckingAccount ${this._accounts[i].getNumber()}: balance: ${this._accounts[i].getBalance()} overdraft limit: ${this._accounts[i]._overdraft}`  ;
               }
           }
     
       }
       return report;
   }
    

}









/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;






