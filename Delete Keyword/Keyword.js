const person = { name: "Alice", age: 25 };

delete person.age;

console.log(person);  
// { name: "Alice" }  ✅ `age` is removed
