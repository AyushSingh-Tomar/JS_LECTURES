
// The form data object can be made by using FormData() constructor

const formData = new FormData();
console.log(formData);

// append()--> The append method appends a new value onto an existing key inside a formdata 
// or adds a new key if it does not exists 

// formData.append(Name,Value,(file)optional);
//------------------------------------------
formData.append("name","John");
formData.append("name","Pinky");
formData.append("my_name","Ayush");
formData.append("my_email","Ayush@ayush");

console.log(formData.get("name"));//--> John
console.log(formData.getAll("name"));//--> (2)['John','Pinky']

// has() is a method that checks if a key is there in the formdata or not

console.log(formData.has("name"));
console.log(formData.has("last_name"));


// keys() returns an iterator of all the keys that are present in form data
console.log(formData.keys()) // you cant see the values but you can get it by for of loop

for(let k of formData.keys()){
    console.log(k);
}

// set()method sets a new value for an existing key name or adds the the key / value if it does not already exists

formData.set("name","kevin");// it adds value in existing key, and removes previous value linked to it

// .values() method 
console.log(formData.values());



for(i of formData.values()){
 console.log(i)
}
// entries() 
for(let[i,k]  of formData.entries()){
    console.log(`${i}: ${k}`)
}
// delete 
console.log("--------------------")
formData.delete("my_email");
for(let[i,k]  of formData.entries()){
    console.log(`${i}: ${k}`)
}