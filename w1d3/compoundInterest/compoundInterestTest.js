"use strict";
/* global assert compoundInterest */
/* compoundInterest()  */

/* import from compoundInterest.js module */
const functionModule = require("./compoundInterest.js");
const compoundInterest = functionModule.compoundInterest;
const assert = require("assert");
describe("compoundInterest", function () {
    it("Test of the monthly compound of $100 in 1 year ", function () {
        assert.equal(compoundInterest(100, 10, 1), 110.47);
    });
    it("Test of the monthly compound of $10000 in 10 year", function () {
        assert.equal(compoundInterest(10000, 5, 10), 16470.09);
    });
});