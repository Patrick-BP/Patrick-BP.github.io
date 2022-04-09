let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }], //subdepartments
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
// ["sales","development","sites","internals"]
//Returns 6700
function sumSalaries(department){
    if(Array.isArray(department)){
       return department.reduce((sum, current) => sum + current.salary,0);
    }else{
        let sum=0;
        
        for (const elem of Object.values(department)) {
         sum+=sumSalaries(elem); 
           
        }
        return sum
         
    }
}
console.log(sumSalaries(company));
//[
//     { name: 'John' },
//     { name: 'Alice' },
//     { name: 'Peter' },
//     { name: 'Alex' },
//     { name: 'Jack' }
//   ]
// function getEmployeeNamesObjectsArray(department) {}
// console.log(getEmployeeNamesObjectsArray(company));


// function getEmployeeNameSalary(department){}
// console.log(getEmployeeNameSalary(company));

//[ 'John', 'Alice', 'Peter', 'Alex', 'Jack' ]
// function getEmployeeNameInArray(department){}
// console.log(getEmployeeNameInArray(company));