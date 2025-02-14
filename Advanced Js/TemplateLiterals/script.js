// "use strict"

// Before ES6 we used only two notations for string literal, that are (') and (")

// But ES6 template literals provide you the syntax that allows you to work with strings more safely



/* ---------------------------------
                                   |
 const obj = { a: 10, b: 20 };     |
 with (obj) {                      |
   console.log(a + b); // 30       |
 }                                 |
            or                     |
 const obj = { a: 10, b: 20 };     |
 const { a, b } = obj;             |
 console.log(a + b); // 30         |
                                   | 
 ----------------------------------*/


// We can create by wrapping out text in back ticks

let msg = `Welcome 
to JS\`s\n notes`;// you can use "",'' within a template literals
// shifting string to another line is not possible with other two options

// console.log(msg);


// // substitutions allows us to embed variables and expressions in a string

// "jkj"

// function test() {
//     y = 10;  // ReferenceError: y is not defined
//     "use strict";
// }
// test();


"hello";  // This is valid but does nothing ignored
42;       // Also valid but useless ignored
true;     // Still valid, but why? ignored
/*1️⃣ NaN is Not Equal to Itself 😵
javascript
Copy
Edit
console.log(NaN === NaN);  // false
🤔 Why?
NaN (Not-a-Number) is the only value in JavaScript that is NOT equal to itself.
It's because NaN represents an invalid number—it doesn’t have a definite value.
✅ Fix: Use isNaN() or Number.isNaN()
javascript
Copy
Edit
console.log(isNaN(NaN));  // true
console.log(Number.isNaN(NaN));  // true
2️⃣ typeof null is "object" 🧐
javascript
Copy
Edit
console.log(typeof null);  // "object"
🤔 Why?
This is an old bug in JavaScript that was never fixed for backward compatibility.
null is not an object, but typeof mistakenly returns "object".
✅ Fix: Use === null to check for null
javascript
Copy
Edit
console.log(null === null);  // true
3️⃣ Adding Arrays Gives Weird Results 🤯
javascript
Copy
Edit
console.log([1, 2, 3] + [4, 5, 6]);  // "1,2,34,5,6"
🤔 Why?
The + operator converts arrays to strings and then concatenates them.
✅ Fix: Use .concat() or [...arr1, ...arr2]
javascript
Copy
Edit
console.log([1, 2, 3].concat([4, 5, 6]));  // [1, 2, 3, 4, 5, 6]
console.log([... [1, 2, 3], ... [4, 5, 6]]);  // [1, 2, 3, 4, 5, 6]
4️⃣ "[]" == false but "[] == ![]" is false 🤯
javascript
Copy
Edit
console.log([] == false);  // true
console.log([] == ![]);    // false
🤔 Why?
[] == false → [] is coerced into an empty string "", and "" == false is true.
![] is false, so [] == false is checked again—which is true.
But [] == ![] is evaluated as [] == false, and since false is a boolean, the conversion fails.
JavaScript type coercion is wild! 😵

5️⃣ true + true gives 2
javascript
Copy
Edit
console.log(true + true);  // 2
🤔 Why?
JavaScript converts true to 1 when used in arithmetic operations.
true + true → 1 + 1 → 2.
6️⃣ {} + [] vs [] + {}
javascript
Copy
Edit
console.log({} + []);  // "[object Object]"
console.log([] + {});  // "[object Object]"
🤔 Why?
{} alone is interpreted as an empty block (ignored).
+ [] is treated as "" (empty string).
But [] + {} converts {} into a string ("[object Object]").
7️⃣ parseInt("08") gives 0 in some browsers
javascript
Copy
Edit
console.log(parseInt("08"));  // 8 (modern browsers), 0 (old ones)
🤔 Why?
In older browsers, parseInt("08") was interpreted as octal (base 8), where 08 is invalid.
Modern JavaScript treats it as decimal.
✅ Fix: Always specify the radix (base)
javascript
Copy
Edit
console.log(parseInt("08", 10));  // 8
8️⃣ Math.max() < Math.min() 🤔
javascript
Copy
Edit
console.log(Math.max() < Math.min());  // true
🤔 Why?
Math.max() without arguments returns -Infinity.
Math.min() without arguments returns Infinity.
-Infinity < Infinity → true.
9️⃣ {} + {} returns [object Object][object Object]
javascript
Copy
Edit
console.log({} + {});  // "[object Object][object Object]"
🤔 Why?
Both {} are converted to strings ("[object Object]").
The + operator concatenates them.
🔟 !![] is true but ![] == false
javascript
Copy
Edit
console.log(!![]);  // true
console.log(![] == false);  // true
🤔 Why?
[] is truthy, so !![] is true.
![] converts [] to false, so ![] == false is true.
🎯 Bonus: The Infamous 0.1 + 0.2 !== 0.3 Problem
javascript
Copy
Edit
console.log(0.1 + 0.2 === 0.3);  // false
console.log(0.1 + 0.2);  // 0.30000000000000004
🤔 Why?
JavaScript uses floating-point arithmetic, which leads to precision errors.
0.1 + 0.2 is slightly greater than 0.3 due to how numbers are stored in binary.
*/



