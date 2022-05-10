"use strict";
/* eslint-disable */

const isPrime = num =>{   
return new Promise((resolve, reject)=>{
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
         if(num % i === 0){ 
        setTimeout(()=>reject({prime: false}), 500);
         
    }
    }
   
         setTimeout(()=>resolve({prime: true}), 500);

});
}


console.log('start');
isPrime(7)
    .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');

//====================================================================

Array.prototype.removeDuplicatesAsync = function (){
    let newArr =[];
    this.forEach(element=> {
           if(!newArr.includes(element))
            newArr.push(element);
       });

   new Promise(function(resolve, reject){
       resolve(newArr)
   }).then(res => console.log(res));
 
   
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);
