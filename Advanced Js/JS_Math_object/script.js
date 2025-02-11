// Math object allows you to perform mathematical tasks on numbers.
// methods and properties of math object can be used without creating math object first

//Math is a built-in static object in JavaScript,that exists globally in JavaScript.

//const myMath = new Math(); // ❌ TypeError: Math is not a constructor

//All Math methods and properties are static, meaning they belong to the Math object itself and are not tied to an instance.


/*
const MyMath = {
    square: (x) => x * x,
    cube: (x) => x * x * x,
    PI: 3.14159
};

console.log(MyMath.square(5)); // Output: 25
console.log(MyMath.PI);        // Output: 3.14159
*/


/*------------------Properties--------------------*/

// PI value
console.log(Math.PI)

//euler number
console.log(Math.E)

// square root of 1/2
console.log(Math.SQRT1_2)

// log of 2
console.log(Math.LN2)

// log of 10
console.log(Math.LN10)

// log e with base 2
console.log(Math.LOG2E)

// log e with base 10
console.log(Math.LOG10E)

/*---------------------Method-----------------------*/

// Math.round() returns the nearest integer value

console.log(Math.round(5.5)) // 5.5 =>6, 5.4=> 5,5.6=>6

// Math.ceil() rounds out to nearest greater integer

console.log(Math.ceil(5.5)) // 5.5 =>6, 5.4=> 6,5.6=>6

// Math.ceil() rounds out to nearest lesser integer

console.log(Math.floor(5.5)) // 5.5 =>5, 5.4=> 5,5.6=>5

// Math.ceil() rounds out to nearest lesser integer

console.log(Math.floor(5.5)) // 5.5 =>5, 5.4=> 5,5.6=>5

// Math.trunc() returns the integer part of the number

console.log(Math.trunc(5.5)) // 5.5 =>5,10.9=>10

// Math.trunc() returns the integer part of the number

console.log(Math.trunc(5.5)) // 5.5 =>5,10.9=>10

//Math.pow() returns a number , which is a number raised to an exponent
console.log(Math.pow(2,3))

//Math.sqrt() returns squareRoot of a number
console.log(Math.sqrt(2))

//Math.abs() method returns an absolute value corresponding to the value provided for the argument
console.log(Math.abs(-9))

//Math.min() & Math.max()
console.log(Math.min(2,4,0,56,456,43567,3456,-23,234,234534564567,-23452346),Math.max(2,4,0,56,456,43567,3456,-23,234,234534564567,-23452346))


let arr = [1,2,3,4,5,6,7,8];
console.log(Math.max(...arr));

//Math.random() method returns a random number between 0 and 1, here 1 is exclusive and 0 is inclusive
console.log(Math.random())

// ✅ 1. How Math.random() Works Internally
// JavaScript does not generate truly random numbers. Instead, it uses a Pseudo-Random Number Generator (PRNG) based on a mathematical algorithm.

// Most JavaScript engines use:

// Xorshift128+
// Mersenne Twister (less common)
// These PRNGs generate numbers based on a seed value (initial state). Since JavaScript doesn't allow setting a custom seed, the seed is typically based on the system clock.
// ⚡ This means Math.random() is not truly random, but it’s good enough for most non-cryptographic applications.

/*✅ Cryptographically Secure Alternative (crypto.getRandomValues())
For security purposes (e.g., token generation), use:

*/
const array = new Uint32Array(1);
window.crypto.getRandomValues(array);
console.log("Secure Random Number:", array[0]);




// Math.sign() method returns 1 if number is positive else it returns -1 if number is negative or 0 if it's 0
console.log(Math.sign(34))

// Math.log2() it returns value of log(val) base 2
console.log(Math.log2(2))

//Math.log10()
console.log(Math.log10(10))

// Methods to get sine,cos and tan values
// since they accept radian we need to convert degree to radian
let degree =60;
let radian =(degree)*Math.PI/180;
console.log(Math.sin(radian));
console.log(Math.cos(radian));
console.log(Math.tan(radian));
