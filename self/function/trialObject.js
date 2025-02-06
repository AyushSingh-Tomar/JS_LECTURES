const person={
    "First name": "Ayush",
    "Last name": "tomar",
    age:"25",
 }
//  let age="age"
//  console.log(person["First name"])
//  console.log(person[age])
// console.log(person)
// person={"middle name":"Singh",...person};
// console.log(person)

// Object.assign(person,{newage:"24","middle name":"Singh"});
// console.log(person)
// person={...person,newage:"24","middle name":"Singh"}
// console.log({...person});
// let users = [
//     { id: 1, name: 'Alice', age: 25 },
//     { id: 2, name: 'Bob', age: 30 }
//   ];
  
//   // Update the user with id 2
//   let updatedUsers = users.map(user => 
//     user.id === 2 ? { ...user, age: 31 } : user
//   );
  
//   console.log(updatedUsers);
//   // [ { id: 1, name: 'Alice', age: 25 }, { id: 2, name: 'Bob', age: 31 } ]
// let obj = { name: 'Alice', age: 25 };

// for (let key in obj) {
//   if (key === 'age') {
//     obj[key] = 30;
//   }
// }

// console.log(obj); // { name: 'Alice', age: 30 }
// person.middleName="Risk";
// person["middle Name"]="Risk";
// console.log(person);

for(i in person){
    document.getElementById("new").insertAdjacentHTML('beforeend',`${i} : ${person[i]} and `);

}