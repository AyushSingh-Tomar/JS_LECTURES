// var message = "Hello, world!"; // Global variable

// function updateMessage() {
//     var message = "Goodbye!"; // Redeclares the global variable
// }

// updateMessage();
// console.log(message); // Outputs: "Goodbye!"

// var message = "Hello, world!"; // Global variable

// function updateMessage() {
//     message = "Goodbye!"; // Implicitly modifies the global variable
// }

// updateMessage();
// console.log(message);

// function process() {
//     var data = 42;
//     if (true) {
//         var data = 100; // Same scope as the outer var
//         console.log(data); // 100
//     }
//     console.log(data); // 100 (unexpected, overwrote the outer data)
// }
// process();
// console.log(x); // undefined (because of hoisting)
// var x = 5;
// console.log(x); // 5
// var x = 10; // Redeclaration
// console.log(x); // 10

// for(let i=0;i<4;i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }
// var z = 30;
// console.log(window.z); 
// console.log(foo); // What will this output?
// var foo = 'bar';
// 'use strict';
// function test() {
//     foo = 10; // Will this work?
//     var foo;
// }
console.log(foo);
let foo =10;