// // throw statement allows you to throw exception
// // throw "Some error occurred"
// // this stops the JS to execute the next line of code

// try{
//     // throw new Error("I threw an error!");
//     // throw new TypeError("I threw an error!");
//     // throw new ReferenceError("I threw an error!");

// }
// catch(e){
//     console.log(e)
// }

// function add(a,b){
//     if(typeof a !="number"){
//         throw new TypeError(`This argument \n a: '${a}' needs to be a number!`,{cause:"Invalid Type"})
//     }
//     if(typeof b !="number"){
//         throw new TypeError(`This argument \n b: '${b}' needs to be a number!`,{cause:"Invalid Type"})
//     }
//     return a+b;
// }


// try{
//     let result = add(10,"p");
//     console.log(result)
// }
// catch(e){
//     console.log(e,e.cause)
// }

// use defined Exception

// we can create a custom error class by extending the Error class

class my_Error extends Error{
    constructor(value){
        super(`${value} is not a valid number`);
         this.name="invalid number"
    };
   
}

function add(a,b){
    if(typeof a !="number"){
        throw new my_Error(a)
    }
    if(typeof b !="number"){
        throw new my_Error(b)
    }
    return a+b;
}

try{
    let result = add(10,"let");
    console.log(result)
}
catch(e){
    console.log(e,e.cause)
}