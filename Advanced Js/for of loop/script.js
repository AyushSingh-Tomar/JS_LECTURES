// var i=0;
// // introduced in jS with ES6
// // ES6 introduced a new statement "for of " that iterates over an iterable object such as an array,String,Map
// array =["Ayush",{name:"Ayush Singh",phone:787979},90,`${globalThis.i}`]
// for(let a of array){
//     console.log(a)
// }

globalThis.i = 0;

const array = ["Ayush", { name: "Ayush Singh", phone: 787979 }, 90, `${globalThis.i}`];

for (let a of array) {
    console.log(a);
}

// to use index

let colors = ["Red","Green","Blue","Yellow"]
for(let color of colors.entries()){
console.log(color)
}

// also
for(let [i,color] of colors.entries()){
    console.log(i,color)
    }



// with objects

let list_of_objects =[
    {name: "Alice", description : "Alice in the room"},
    {name: "mavis", description : "Alice in the room"},
    {name: "Bob", description : "Alice in the room"},
    {name: "aBD", description : "Alice in the room"},
]

for(let {name} of list_of_objects) { // object destructuring
    console.log(name);
}
for(const {name} of list_of_objects) {
    console.log(name);
}