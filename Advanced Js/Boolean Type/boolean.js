// The js Boolean primitive type has two literal values that are "TRUE","FALSE"

let reality=true;
console.log(typeof reality);

// in js you can convert a non boolean value to boolean value by 

let check = Boolean("");// empty string is false, whereas non empty string is true 
console.log(check);

let check2 = Boolean(0); // 0 is false, rest is true
console.log(check2);

let check3 = Boolean(null) // for null, NaN, undefined is considered to be false
console.log(check3);

console.log(check3,typeof check3)

// You can convert the boolean value to a string

