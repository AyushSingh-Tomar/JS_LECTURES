// Whenever we write a program in JS the code is executed line wise,line by line
// that is if a line is executed then only it will execute the next line of the code

//ex->
// console.log("Start");
// for(let i=0;i<=10;i++){
//     console.log(i);
// }
// console.log("End");

// with asynchronous code JS can perform multiple operations at a time
// that is called non-blocking code

console.log("Start");
setTimeout(function(){for(let i=0;i<10;i++){console.log(i)}},3000);
console.log("End");

//we Can use callbacks to create asynchronous code,
// we can also use JS promise and Async and Await