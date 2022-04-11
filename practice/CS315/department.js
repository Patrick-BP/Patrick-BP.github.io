"use strict";
/* eslint-disable */
let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
// ["sales","development","sites","internals"]
// Returns 6700
function sumSalaries(department){

}
console.log(sumSalaries(company));

// [
//     { name: 'John' },
//     { name: 'Alice' },
//     { name: 'Peter' },
//     { name: 'Alex' },
//     { name: 'Jack' }
//   ]
// function getEmployeeNamesObjectsArray(department) {
//  
// }
// console.log(getEmployeeNamesObjectsArray(company));



// [
//     { John: 1000 },
//     { Alice: 600 },
//     { Peter: 2000 },
//     { Alex: 1800 },
//     { Jack: 1300 }
//   ]
// function getEmployeeNameSalary(department){

// }
// console.log(getEmployeeNameSalary(company));

// [ 'John', 'Alice', 'Peter', 'Alex', 'Jack' ]
// function getEmployeeNameInArray(department){
//   if(Array.isArray(department)){
//     return department.map(item =>{
//         return item.name;
//     });
//   }else{
//       let arr =[];
//       for (const elem of Object.values(department)) {
//         arr= arr.concat(getEmployeeNameInArray(elem))
//       }
//       return arr;
//   }  
// }
// console.log(getEmployeeNameInArray(company));