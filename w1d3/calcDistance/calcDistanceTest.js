"use strict";


/* import from calcDistance.js module */
const functionModule = require("./calcDistance.js");
const calcDistance = functionModule.calcDistance;

const assert = require("assert");
describe("calcDistance", function () {
    it("calculate the distance between 0, 0, 5, 5 ", function () {
        assert.equal(calcDistance(0, 0, 5, 5), 7.07);
    });
    it("calculate the distance between 10, 10, 45, 45 ", function () {
        assert.equal(calcDistance(10, 10, 45, 45), 49.50);
    });
    
});