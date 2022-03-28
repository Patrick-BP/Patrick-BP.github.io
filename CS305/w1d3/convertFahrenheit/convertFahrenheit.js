"use strict";
module.exports = {convertFahrenheit};

/** 
* 
* @param {boolean} degreeFahrenheit The first number.
* @returns {Number} The degree celcuis.
*/
function convertFahrenheit(degreeFahrenheit){

    return ((degreeFahrenheit-32) * (5/9)).toFixed(4);

}


console.log("expect 0: ", convertFahrenheit (32));
console.log("expect -17.7778: ", convertFahrenheit (0));
console.log("expect 100: ", convertFahrenheit (212));
console.log("expect 37.7778: ", convertFahrenheit (100));