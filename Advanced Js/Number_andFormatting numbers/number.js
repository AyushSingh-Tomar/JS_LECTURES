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
