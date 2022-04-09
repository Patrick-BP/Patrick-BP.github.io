"use strict";
function dropElements(arr, func) {
  
    for(let i=0; i<arr.length; i){
      if(!func(arr[i])){
         arr.splice(i,1)
      }else{
       break;
      }
    }
      return arr;
    }
    
    console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));