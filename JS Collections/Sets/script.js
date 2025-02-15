// Set is similar to an array which allows you to store multiple types of data in it but it does not allows you to store duplicate data

//====================== construction ==================//

let set  = new Set();
console.log(set);

// or you can pass an iterable object while creating set
 
let set1 = new Set([1,2,3,4,5]);
console.log(set1);

//====================== Insertion ======================//

console.log(set.add("Ayush")); // returns set
set.add("Ayush");
set.add("10");
set.add(10);
set.add({id:50});
set.add(true);
console.log(set);

//====================== keys(),values() =================//

console.log(set.keys()); // returns keys
console.log(set.values()); // returns keys
console.log(set.entries()); // returns keys

//====================== has() ===========================//

console.log(set.has())/// false always;
console.log(set.has("Ayush"))

//====================== delete() ========================//

console.log(set.delete(10)) // returns true if deleted
console.log(set.delete(100)) // returns true if deleted else if not found false


//====================== clear() ========================//
// console.log(set.clear())// undefined
// console.log(set)

//====================== Iterator ====================//

 for(let element of set.keys()){
    console.log(element)
 }

 for(let element of set.values()){
    console.log(element)
 }

 for(let [key,val] of set.entries()){
    console.log(`${key}: ${val}`)
 }

set.forEach((x)=>{
    console.log(typeof x,x)
})
