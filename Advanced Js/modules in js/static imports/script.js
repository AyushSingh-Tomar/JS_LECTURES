// it is important for you to remember that you should import or export outside of other statements 

// we can export the variables,functions or classes with a new name
import {key1,key2,key3,key4}from "./msg3.js"

import greeting, {msg} from './message .js'

// import whole module as an object
import * as msgs from "./message2.js"

// we can import the variables,functions or classes with a new name
import first_name,{middle_name as mn,last_name as ln} from "./msg4.js"

console.log(first_name+" "+mn+" "+ln)



console.log(msg);
console.log(greeting("f","Preeti"));

// as you can see you can import the default export by any name
console.log(msgs.key1);
console.log(key1,key2,key3,key4)

console.log()
// Re-Exporting the imported bindings
