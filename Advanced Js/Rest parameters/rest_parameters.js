// Rest parameters are introduced in js with ES6, it helps us to work with indefinite number of parameters.
// rest parameters must be last formal parameter
let addAll = function(...rest){
    let sum=0;
    for(let i in rest){
 sum+=rest[i];
    }
    return sum;
}

console.log(addAll(1,2,3,4,5,6,7,8,9));
let addAll2 = function(...rest){
    let sum=0;
    for(let i of rest){
 sum+=i;
    }
    return sum;
}

console.log(addAll2(1,2,3,4,5,6,7,8,9));
// /--------------------- ------------------/

// it works if there are other parameters as well
const add3=(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c)

}
add3(1,2,3,4,5,6,7)

// printing a rest parameter gives an array

// but you can not use it like follows

// const add4=(a,...b,c)=>{}