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