// ES-2017 introduced async await keywords that allows you to write
// asynchronous code that looks more like a synchronous code with more readability
// async keyword helps you to define a function which performs an asynchronous code
// async functions executes in a separate order than the rest of the code through the event loop. it always returns a promise

async function say_hello(){
    return "Hello";
}

console.log(say_hello())

function say_hello_2(){
    return "Hellow";
}

console.log(say_hello_2());

// since the function returns a promise, you cane consume it using then()
say_hello().then(value=>{console.log(value)})

// "use strict";

// const object1 = {};

// console.log(Object.isExtensible(object1));
// // Expected output: true

// Object.preventExtensions(object1);

// console.log(Object.isExtensible(object1));
// // Expected output: false

// Await keyword 
// We can use the await keyword to wait for a promise to settle either in a resolved or rejected state
// await keyword can only be used in a async function

// let result = await promise;

async function sayHello(){
    return "Hello Dude!";
}

async function display(){
    let result = await sayHello();
    console.log(result);         
}

display();


let test_promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("Success")},2000)
})

// there is no need to use then() or catch() function because the await itself waits for the out put to get generated
async function show(){
    let result = await test_promise;
    console.log(result);
}
show();