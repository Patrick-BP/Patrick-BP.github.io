"use strict";
/*
// Working with prototype

let animal = {
    jumps: null
  };

  let rabbit = {
      jumps: true,
    __proto__: animal
    
  };
  
  console.log( rabbit.jumps ); // ? true
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // ? null
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // ? undefined


*/

//Searching algorithm

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__ : head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__ : table
  };
  
  let pockets = {
    money: 2000,
    __proto__ : bed
  };

  console.log(pockets.pen);