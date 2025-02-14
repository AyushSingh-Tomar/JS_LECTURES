// Try catch only catches the errors occurs in a valid code

// these types of errors are called run time error/exceptions

// console.log("Code start");
//let result = add(10,20);// Note going to execute rest of the line
// console.log(result);
// console.log("Code End");

try{
     // code may cause error
}
catch(err){
    //code to handle error
}//
// JS engine provide us an Error object which has two properties that are 1>error.name 2>error.message 3> error.stack



/*--------------------------------------------------*/

//function add(a,b){return a+b;}// if commented it will raise error that is caught in catch block

// console.log("start");
// try {
//     let result = add(10,20);
//     console.log(result);
// } catch(error){
//     console.log(error.name +":"+ error.message +":"+ error.stack);
// }
// console.log("Code End");

//Optional catch binging was introduced in ES2019, that allows you to write the try ...catch statement without using the error object.

try {
    let result = add(10,20);
    console.log(result);
} catch{
    console.log("Some error");
}