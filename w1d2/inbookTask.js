"use strict";
// rewrite the switch into if
if(browser == 'Edge') {
    alert("You've got the Edge!");
  } else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari"|| browser == "Opera") {
    console.log( "Okay we support these browsers too" );
  } else {
    console.log( "We hope that this page looks ok!" );
  }

  //Rewrite "if" into "switch"

  let a = +prompt("a?", "");

switch (a) {
  case 0:
    console.log( 0 );
    break;

  case 1:
    console.log( 1 );
    break;

  case 2:
  case 3:
    console.log( "2,3" );
    break;
}

// Rewrite the function using '?' or '||'

function checkAge(age) {
    return (age > 18) ? true : confirm("Did parents allow you?");
  }

 // Function min(a, b)

 function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  // Function pow(x,n)

  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x: ", "");
  let n = prompt("n: ", "");
  
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
    console.log( pow(x, n) );
  }