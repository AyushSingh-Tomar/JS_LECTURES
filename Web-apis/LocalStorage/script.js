// LocalStorage is an object with Storage type
// The storage type is designed to store name-value pairs
//  it has following methods
// getItem()
// setItem()
// removeItem()
// clear()
// key
// length

// constructor Storage()
console.log(window.localStorage)

//length
console.log(window.localStorage.length)

// Since window object is global object we don't need to specify it

// so we can also write 
var  a = 10;
console.log(localStorage)
console.log(localStorage.length)
console.log(globalThis.a,this.a)

// It is used to store data in web-browser with no expiry date.even if you close browser it will be available


// using setItem() to set values in Storage

localStorage.setItem("theme","dark")
localStorage.setItem('b',"dark")// 
localStorage.setItem(1,"pungent") // cant be accessed by . notation
console.log(localStorage.theme);
console.log(localStorage.b);
console.log(localStorage.getItem(1));
console.log(localStorage.removeItem(1))// returns nothing undefined
console.log(localStorage.getItem(1));
console.log(localStorage.getItem("theme"));
console.log(localStorage.getItem('b'));
// localStorage.clear();
console.log(localStorage)

//looping over keys of localstorage
console.log(localStorage.key(0))


for(let i =0;i<localStorage.length;i++){
    console.log(localStorage.key(i));
    console.log(localStorage.getItem(localStorage.key(i)));
}


let keys= Object.keys(localStorage);
console.log(keys);
for(let i of keys){
    console.log(localStorage.getItem(i))
}

// storage type stores only string data
// but you can add data converting it into storage 

const settings = {
    background : "black",
    color : "white",
    theme : "dark",
}

// for(let i in settings){
//     console.log(i,settings[i])
//     localStorage.setItem(i, settings[i]);
// }
// console.log("-----------------------------")
// for(i in settings){
//     console.log(localStorage.getItem(i))
// }

localStorage.setItem("theme",settings);
console.log(...localStorage.getItem("theme"));
// it says either [ o b j e c t   O b j e c t ] or [object Object]

//right way to do this is


localStorage.setItem("theme",JSON.stringify(settings));
console.log(localStorage.getItem("theme"));


console.log(JSON.parse(localStorage.getItem("theme")));
