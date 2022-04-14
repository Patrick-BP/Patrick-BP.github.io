"use strict";
/* eslint-disable */
let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


//[ 'John', 'Alice', 'Peter', 'Alex', 'Jack' ]
function getEmployeeNameInArray(department){
    if (Array.isArray(department)) 
        return department.map(item => item.name); 
        
    let names = [];
    for (let subdep of Object.values(department)) {
        names = names.concat(getEmployeeNameInArray(subdep))
    }
    return names ;
}

console.log(getEmployeeNameInArray(company));