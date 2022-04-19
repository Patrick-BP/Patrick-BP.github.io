"use strict";
/* eslint-disable */

let json = {
    "glossary": {
        "title": "example glossary", "GlossSeeAlso":
            { "title": "S", "GlossList": { "GlossEntry": { "ID": "SGML", "Acronym": "SGML", "Abbrev": "ISO 8879:1986", "GlossDef": { "para": "A meta-markup language, used to create markup languages such as DocBook.", "GlossSeeAlso": ["GML", "XML", "S"] }, "GlossSee": "markup" } } }
    }
}




function reverseJson(json) {
    let newobj = {};
    for (const key in json) {
        if (typeof json[key] !== "object" && !Array.isArray(json[key])) {

            newobj[json[key]] = key

        } else if (typeof json[key] == "object" && !Array.isArray(json[key])) {

            newobj[key] = "object"
            newobj = { ...newobj, ...reverseJson(json[key]) }

        } else {
            newobj[json[key].join("")] = key
        }

    }


    return newobj
}

console.log(reverseJson(json))
// ============================================================

function countLeaves(json) {

    let count = 0;
    for (const key in json) {
        if (typeof json[key] !== "object" || Array.isArray(json[key])) {
            count++;
        } else if (typeof json[key] === "object") {
            count += countLeaves(json[key])
        }

    }


    return count
}



console.log(countLeaves(json))