"use strict";

/* global assert computeSalesCommision */
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

/* import from computeSalesCommision.js module */
const functionModule = require("./computeSalesCommission.js");
const computeSalesCommission = functionModule.computeSalesCommission;

const assert = require("assert");
describe("test of ComputSalesCommission", function(){ 
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0); });
    it("tests not salaried and 200 sales", function(){ 
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){ 
    assert.strictEqual(computeSalesCommission(true, 300), 3); });
    it("tests not salaried and 300 sales", function(){ 
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65); });
    it("tests not salaried and 3500 sales", function(){ 
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    }); });