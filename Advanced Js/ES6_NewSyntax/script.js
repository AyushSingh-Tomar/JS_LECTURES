// Es6 introduced "let" keyword in JS to define block scoped variables
// When you declare a variable, it is either global or local
// in JS blocks are denoted by curly braces

{
    var x = 10;// function scoped
}

console.log(x);

function scope(){
    var a = 10;
    if(a==10){
        var y =0;
    }
    console.log(y);
}
scope();

// let does not allow redeclarations but it allows redefinitions of variable
// var allows both 
// const allows non

let j = 66;
{
    let j=20;
}
console.log(j)
// let keyword does not allow  hoisting , but variable with var keywords are hoisted

console.log(f);

var f =10;