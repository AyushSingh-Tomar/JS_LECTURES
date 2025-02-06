let screening = document.getElementById("display10");

const person={
    name:"Ayush",
    "add ress":{
        city:"Bhopal",
    }
}

let message=`${person.name} lives in ${person["add ress"].city} in village ${person["add ress"]?.village}`;
screening.innerHTML=message
let index = 1;
let dynamicObj = {
    [`item${index}`]: "Book", // Creates a property named "item1"
    [`item${index + 1}`]: "Pen" // Creates a property named "item2"
};

console.log(dynamicObj.item1); // Output: "Book"
console.log(dynamicObj.item2); // Output: "Pen"
// -----> Dynamic vs static property
let propertyName = "category";
product[propertyName] = "Electronics"; // Dynamically adding a new property
console.log(product.category); // Output: "Electronics"
let product = {
    name: "Laptop",
    price: 1000,
    stock: 50
};

let key = "price"; // The key is stored in a variable
console.log(product[key]); // Output: 1000
let dynamicKey = "color";
let value = "red";
let car = {
    make: "Honda",
    model: "Civic",
    [dynamicKey]: value // Dynamic property key and value
};

console.log(car.color); // Output: "red"
let user = {};
let propName = "age";
user[propName] = 30; // Dynamically setting the "age" property
console.log(user); // { age: 30 }
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
let propertyInput = prompt("Which car property do you want to know?");
alert(car[propertyInput]);
let key = "year";
console.log(car[key]); // Output: 2021
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021
};

let propertyName = "model"; // This can be dynamic (coming from user input, calculations, etc.)
console.log(car[propertyName]); // Output: "Camry"