// working with variables
let name = 'John';
let admin = name;
alert(admin);


// Give to right name
let ourPlanet = 'earth';
let userName = 'John';

//uppercase const
const BIRTHDAY = '18.04.1982';
const age = somecode(BIRTHDAY);

// the posfix and prefix forms
let a = 1, b = 1;

 let c = ++a; // 2
 let d = b++; // 1

// Assignment result
let a = 2;
let x = 1 + (a *= 2); // a= 4 , x = 5

// type conversions

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px
"$" + 4 + 5 // $45
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // infinity
" -9 " + 5 // -9 5
" -9 " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 //  -2

// fix the addition

// Comparisons

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false


//Logical operators
//OR
alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3) ) // 1 , 2
//AND
alert(1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // 1 underfined
alert(null || 2 && 3 || 4); // 3