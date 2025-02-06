// let add = function(a,b){
//       return a+b;
// }

// arrow functions are the most commonly used functions in js and they are used for the reason of compact size

let add = (a,b)=>a+b;
// in single line arrow function we can return a value without using the return keyword, it becomes optional

console.log(add(3,4));
// arrow function without any parameter

let greet=()=>console.log("HELLO");
greet();
// function with single parameter
let msg=(e)=>console.log(e);
msg("pen");

//arrow function does not have its owm this value and argument object, it returns undefined
// this makes them unsuitable for use in the eventHandlers
//  when defined in Objects, it inherits this value from the enclosing lexical scope(where the function was actually defined)

//arrow function does not have argument objects, don't use it in those functions 
// function func1(a, b, c) {
//     console.log(arguments[0]);
//     // Expected output: 1
  
//     console.log(arguments[1]);
//     // Expected output: 2
  
//     console.log(arguments[2]);
//     // Expected output: 3
//   }
  
//   func1(1, 2, 3);

// if you need to use a "this value" in a prototype method you should not use arrow function