// Promises are useful when you have to perform multiple asynchronous operations one after another
// when you use then(), it returns another promise to consume that promise you can add another then method


let new_promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(10)},2000)
})

let generated_promise=new_promise.
then(
    value=>{
        console.log(value);
        return value*2;
    }).
    then(
        value=>{
            console.log(value); 
            return value*3;
        }).
        then(value=>{
            console.log(value);
        });
