
// Map is similar to objects in JS, it allows us to store elements in key value pair

// In object we can use only string or symbol data type as key / value pair, but when we use map , we can use any datatype like object ,function,string,string as key in the key-value pair

// The elements in a Map are inserted in an insertion order

// let map1 = new Map()

let map1 = new Map();
map1.set('key1', 'value1');
console.log(map1);

// adding iterable object in map
let map2 = new Map([['key1',"value"],[{name:"Ayush"},"value"],['key3',"value"],])

// note that you can use anything a key not only string
console.log(map2);

//================== Inserting  =================//

//set() method
map1.set('key2', 'value2');
map1.set({name:"John"},{role:"Admin"}).set({name:"Joh"},{role:"Admi"});
console.log(map1)

//==================  Access =================//

//get()
// console.log(map1.get({name:"John"}))



let my_map= new Map();
my_map.set("Person1", "John");
my_map.set("Person2", "Alice");
my_map.set("Person3", "Pikolo");
my_map.set("Person4", "Goku");

//==================  Access =================//

//get()
console.log(my_map.get("Person1"));

//==================  Check existence =================//

//get()
console.log(my_map.has("Person2"));// true
console.log(my_map.has("Person5"));// false

//==================  clear() and delete() =================//

//delete()
my_map.delete()//-> deletes nothing
my_map.delete("Person1")//-> deletes and returns Person1
my_map.delete("Person6")//-> does not delete anything,returns false
console.log(my_map)
//clear()
// my_map.clear()//--> Removes all element
console.log(my_map); 

//==================  .size =================//
my_map.size=9; //useless
console.log(my_map.size)


//==================  keys() =================//
let x = my_map.keys();
console.log(typeof x)
console.log(x)

//==================  values() =================//
let v = my_map.values();
console.log(typeof v)
console.log(v)

//==================  entries() =================//
let z = my_map.entries();
console.log(typeof z)
console.log(z)


// we can iterate over the elements of a map using for of loop or for each method

my_map.forEach((y,x)=>{
    console.log(x+"=>"+y)
})

 for(let [key,value] of my_map){
    console.log(key+"=>"+value)
 }

 for(let keys of my_map.keys()){
    console.log(my_map.get(keys));
 }
 for(let values of my_map.values()){
    console.log(values);
 }
 for(let tuple of my_map.entries()){
    console.log( tuple);
 }