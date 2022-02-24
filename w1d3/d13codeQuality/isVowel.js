"use strict";
module.exports = { isVowel };

/**
 * 
 * @param {String} character this is a string to go through.
 * @return {boolean} true if its a vowel and false if its not.
 */
function isVowel(character) {
    if (character === "a") { return true; }
    else if (character === "e") { return true; }
    else if (character === "i") { return true; }
    else if (character === "o") { return true; }
    else if (character === "u") { return true; }
    else return false;

}

console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("z"));
console.log(isVowel("5"));

