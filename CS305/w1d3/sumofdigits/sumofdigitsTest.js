"use strict";

const functionModule = require("./sumofdigits.js");
const sumDigits = functionModule.sumDigits;
const multDigits = functionModule.multDigits;

const assert = require("assert");
describe("sum and multiplication of all Digits", function (){
    it("calculate the sum of 1234 ", function (){
        assert.equal(sumDigits(1234),10);
    });
    it("calculate the sum of 102 ", function (){
        assert.equal(sumDigits(102),3);
    });
    it("calculate the sum of 8 ", function (){
        assert.equal(sumDigits(8),8);
    });
    it("calculate the multiplication of 1234", function (){
        assert.equal(multDigits(1234),24);
    });
    it("calculate the multiplication of 102", function (){
        assert.equal(multDigits(102),0);
    });
    it("calculate the multiplication of 8", function (){
        assert.equal(multDigits(8),8);
    });
});