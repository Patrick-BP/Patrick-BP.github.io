"use strict";
/* eslint-disable */

// const isPrime = num => new Promise((resolve, reject) => {
//     setTimeout(function() {
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//             if (num % i === 0) reject({ prime: false });
//         resolve({ prime: num > 1 });
//     }, 500);
// });


// async function isPrimeAsync(num){

//     try{
//         let res = await isPrime(num)
//             console.log(res);
//     }
//     catch(e){
//         console.log(e);
//     }
// }


async function helper(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
            throw new Error('nooo')
    }
return { prime: true };
}
async function isPrimeAsync(num) {
    try {
        let result = await helper(num);
        console.log(result);
    } catch (e) {
        console.log({ prime: false });
    }

}

console.log('start');
isPrimeAsync(7)
console.log('end');

//================================================

Array.prototype.removeDuplicatesAsync = async function () {

   async function bar(r) {
      let newArr = [...new Set(r)];
      return newArr;
   }
   let res = await bar(this);
   console.log(res);
}



console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync();
console.log(`end`);