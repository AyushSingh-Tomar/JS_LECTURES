// In weak set you can only store objects 

//===================Constructor =================//
let weakset = new WeakSet();
// console.log(weakset)

// let weakset1 = new WeakSet([{id:1,name:"Lolsum"},{id:1,name:"Lolsum"},]);
// console.log(weakset1);


// //===================Add =================//

// weakset.add({id:3,name:"impsum"})

// //===================has =================//

// console.log(weakset.has({id:3,name:"impsum"}))


// the weak Set is not able to distinguish between two different objects, the following needs to be the procedure
let user1 = {
    id:1,
    name:"user1"
}
let user2 = {
    id:2,
    name:"user2"
}
let user3 = {
    id:1,                   //doesn't check if attribute is duplicating
    name:"user3"
}
let user4 = {
    id:4,
    name:"user4"
}

weakset.add(user1); // adds a  single object at a time
weakset.add(user2); // adds a  single object at a time
weakset.add(user3); // adds a  single object at a time
weakset.add(user4); // adds a  single object at a time
console.log(weakset);


console.log(weakset.has(user1));
console.log(weakset.delete(user4)); // returns true if deleted ,if not present returns false;
console.log(weakset.has(user4));

