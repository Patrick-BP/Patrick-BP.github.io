"use strict";
/* eslint-disable */
let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};


// Returns 6700

// function sumSalaries(obj){
//     let sum = 0;
//     for (const keys in obj) {
//         if(Array.isArray(obj)){
//           sum =  obj.reduce((sum, current)=> sum + current.salary,0);
//         }
//         if(typeof obj[keys] === "object" && !Array.isArray(obj)){
//             sum += sumSalaries(obj[keys])
//         }
//     }
//     return sum;
// }
// console.log(sumSalaries(company));

// [{ name: 'John' },{ name: 'Alice' },{ name: 'Peter' },{ name: 'Alex' },{ name: 'Jack' }]
// function getEmployeeNamesObjectsArray(obj) {
//     let arr = [];
// for(let keys in obj){
//     if(Array.isArray(obj[keys])){
//         for (const elem of obj[keys]) {
//             arr.push({name:elem.name})
//         }
//     }
//     if(typeof obj[keys] === "object" && !Array.isArray(obj[keys])){
//      arr = arr.concat(getEmployeeNamesObjectsArray(obj[keys]))   
//     }
// }
// return arr

// }
// console.log(getEmployeeNamesObjectsArray(company));



// [
//     { John: 1000 },
//     { Alice: 600 },
//     { Peter: 2000 },
//     { Alex: 1800 },
//     { Jack: 1300 }
//   ]
// function getEmployeeNameSalary(obj){
//     let arr = [];
//     for(let keys in obj){
//         if(Array.isArray(obj[keys])){
//             for (const elem of obj[keys]) {
//                 arr.push({[elem.name]: elem.salary})
//             }
//         }
//         if(typeof obj[keys] === "object" && !Array.isArray(obj[keys])){
//          arr = arr.concat(getEmployeeNameSalary(obj[keys]))   
//         }
//     }
//     return arr
    
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





// Returns  ["sales","development","sites","internals"]

// function getDeptnames(obj){
//     let arr = [];
//     for (const keys in obj) {
//         arr.push(keys)
       
//         if(typeof obj[keys] === "object" && !(Array.isArray(obj[keys]))){
//           arr = arr.concat(getDeptnames(obj[keys]))  
//         }
//     }
//     return arr;
// }
// console.log(getDeptnames(company))