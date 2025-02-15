//=================== Creation ==================//
let my_weakMap = new WeakMap();
console.log(my_weakMap)//items unknown

//================== Insertion ==================//
//my_weakMap.set("Person1","John") // invalid key
my_weakMap.set({name:"John"},"John") // valid key, you can only use object as keys
console.log(my_weakMap)
