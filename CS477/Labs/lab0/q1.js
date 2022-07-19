"use strict";
/* eslint-disable */
const result = (function(exports, module){
    exports = module.exports; // {}
    exports.firstname = 'John'; // adding firstname property to exports object
    module.exports.lastname = 'Smith'; // adding lastname property to exports object
    exports = { // creating a new object with getFullName() fuction
        getFullName: function(){
            console.log('John Smith')
        }
    }
    return module.exports;
}).apply(null, [null, {exports: {}}]); // export = null and module = {}
console.log(result); // { firstname: 'John', lastname: 'Smith' }