// Javascript promise is an object which links producing code and consuming code
// Producing code is a code which may take some time in order to accomplish
// a code to get data from database or API or written code to upload files  These process will take time to complete.
// consuming code is the code which may wait for the producing code to produce result 

// you can create and consume a promise

// new Promise(Function(resolve,reject){
// Producing code}

// the function which is passed in Promise() constructor is known as executer

//whenever a new Promise is generated the executer automatically runs and produces a result,
//  two arguments are used in this executer function,they are callbacks provided by JS

// new Promise((resolve,reject)=>{})

// The promise object support two properties 
// a) State -> Pending,Fulfilled ,rejected
// b) Result ->
/*
Initially the state will be pending and result will be undefined

when state is fulfilled result will be a value ,

if the state is rejected the result will be an error object
*/

let p = new Promise((resolve,reject)=>{
    let x = 0;
    if(x==0){
        resolve("Okay");
    }
    else{
        reject("Error: condition is falsified");
    }
})


console.log(p);

// How to consume/ use a promise

// So as to consume the promise we can use different methods that are then()finally()catch() etc;

// then() method is used to fetch values from the promise , it has two arguments one is a callback which is called in case of success and the other one for calling in case of rejection


// if the status is successful it is going to execute first function rather than the next one
// first function should always be the success function
// Both parameters are optional
///  p.then(function(value){console.log(`Status : Accepted :\nData : ${value}`)});


// in arrow function if you have only one parameter you can remove parenthesis
/////  p.then(value=>{console.log(`Status : Accepted :Data :${value}`)},error=>{console.log(`rejected`)});


// if you are only interested in errors you can use  null as first parameter
// p.then(
//     null,// it will not perform any operation if the status is resolved
//     error=>{console.log(`rejected`)}
// );

// if it is the only task that you have to perform than there is a better method to do that that is using the catch() method

// this method is used when the state is rejected or another error occurs

// p.catch(err=>{
//     console.log(err);
// })

// Using then() and catch() together


// p.then(value=>console.log(`Successful:${value}`)).catch(err=>console.log(err));


// The finally method gets executed when the promise is either resoled successfully or rejected
// this method does not take any argument

// p.finally(()=>console.log("Done"));


// We can use then finally and catch method together

p.then(value=>{console.log(`Successful : ${value}`)}).catch(err=>{console.log(err)}).finally(()=>{console.log("Done")});

let new_promise = new Promise((resolve,reject)=>{
    let x =1;
    if(x==0){
        resolve("success")
    }
    else{
        reject("Error")
    }
    
})

new_promise.then((value)=>{console.log(value)},(err)=>{console.log(err)})