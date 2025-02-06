// Symbol data type
// javascript ES6 introduced a primitive new data type 
// symbol are unique and it can not be changed

// to create a new symbol use global symbol function
const s = Symbol();

// to check type of the variable s
console.log(s)

// if we create a new symbol and if we compare them it will show that they are different
const s2 = Symbol();
console.log(s===s2)

//We can also add any key or description to the symbol
const s3 = Symbol("AST");
console.log(s3)

// how to access the description of a symbol?
//by using property "description"
console.log(s3.description)

//when we create a new symbol with same description, still it will be different unique symbol

//Symbols can be used as object keys, it is useful when you want to assign a unique identifier to an object
const id = Symbol("id");
const course ={
    name: "js",
    channel:"greatStack",
    [id]: 1234
}

console.log(course[id])

// the for in..loop does not include the symbol data type,or symbolic properties
for(i in course)
{
    console.log(i)
}

//to share symbols globally, in case we want to use it globally,using for method
const gs=Symbol.for("id");
//for("KEY") method in Symbol class will search for symbol with the id key in the global symbol registry, it returns the specific symbol available else if not present, the for method will create a new symbol and register it under the given id

const gs1= Symbol.for("id");
console.log(gs1==gs) // true;

//TO get a key associated to a symbol you can use Symbol.keyFor("symbol")
console.log(Symbol.keyFor(gs))
// here you need to create a symbol with Symbol.for("key") only else youll get undefined
