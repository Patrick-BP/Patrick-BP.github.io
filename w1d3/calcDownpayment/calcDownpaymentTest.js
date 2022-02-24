"use strict";
const functionmodule = require("./calcDownpayment.js");
const calcDownpayment = functionmodule.calcDownpayment;
const assert = require("assert");
describe("calcDownpayment", function (){
    it("calculate the down payment for cost of 40000", function (){
        assert.equal(calcDownpayment(40000), 2000);
    });
    it("calculate the down payment for cost of 50000", function (){
        assert.equal(calcDownpayment(50000), 2500);
    });
    it("calculate the down payment for cost of 100000", function (){
        assert.equal(calcDownpayment(100000), 7500);
    });
    it("calculate the down payment for cost of 250000", function (){
        assert.equal(calcDownpayment(250000), 25000);
    });
    
});