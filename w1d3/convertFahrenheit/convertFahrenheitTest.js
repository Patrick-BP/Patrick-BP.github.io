"use strict";
const functionModule = require("./convertFahrenheit.js");
const convertFahrenheit = functionModule.convertFahrenheit;
const assert = require("assert");
const { isTypedArray } = require("util/types");
describe("convertFahrenheit", function (){
    it("calculate 32 degree F into degree C", function (){
        assert.equal(convertFahrenheit(32), 0);
    });
    it("calculate 0 degree F into degree C", function (){
        assert.equal(convertFahrenheit(0), -17.7778);
    });
    it("calculate 212 degree F into degree C", function (){
        assert.equal(convertFahrenheit(212), 100);
    });
    it("calculate 100 degree F into degree C", function (){
        assert.equal(convertFahrenheit(100), 37.7778);
    });

});
