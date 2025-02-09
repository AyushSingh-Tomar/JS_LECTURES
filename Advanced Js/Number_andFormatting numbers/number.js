//both floating point numbers and whole numbers can be stored

let million = 5e6; // 5000000
let million1 = 5e+6; // 5000000

// to write a microsecond in the exponential notation
let microsecond =1e-6;//0.000001

// to display 0.01
let number = 1e-2


//BigInt 
// It has the ability to store numbers up tp 2^53-1

let x = 100000000000000000000000000000000000000000000000n;
console.log(typeof x);

// FORMATTING numbers in  js

// The toFixed() method is used to format a number with a specified number of decimal points,
//ex:-
// accepts a number as an argument which specifies upto how many digits will considered
console.log(number.toFixed(2));// 0.01


// the toExponential() method used to format a number in exponential notation
let num = 2000;
console.log(num.toExponential());


// the toPrecision() method is used to get a string representation of a number to the specified precision 
 // the argument of the method decides the precision of the digit//(leftmost n digits)
 let num1= 59.13435;
 console.log(num1.toPrecision(4));
 console.log(num1.toPrecision()); //empty function will give full string, it works as toString()

