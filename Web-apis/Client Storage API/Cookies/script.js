// Cookies 

/*
 What are cookies
--> Cookies are small data strings that are directly stored in the browser

 hows does this work
-->
    
   0>When we open open any website, 
   1> it's Server sends HTTP cookies
   2> Then web-browser stores HTTP cookies on computer
   3> When the request is made to the same server/website
   4> Browser will send back the cookies data to server

 Need of cookies

--> When you send two subsequent cookies to the server, it does not know if both the requests are made from the same browser/ user because they both are independent
    therefore cookies are used to identify if both the requests are from the same browses
*/



//==================Creation=========================//

document.cookie = "userid=Ayush; max-age=0";

// a cookie can store name {space} value {space} domain {space} path {space} expiry date {space} secureFlag

document.cookie="username=Ayush; expires=Sun, 16 feb 2025 12:00:00:00 UTC; value=Admin; path=/; max-age=0"


//========================cookies Age==========================//

// By default cookie is deleted when browser is closed but we can set expiry date to store it even after browser is closed{times has to be given in utc format} in case you gave old date cookie expires, deleted, you can also give max-age
//document.cookie="username=Ayush; max-age={time in seconds}"
//document.cookie="username=Ayush; max-age={3600}"
//document.cookie="username=Ayush; max-age=0" cookie will be deleted
//document.cookie="username=Ayush; max-age=-1" cookie will be deleted


//====================== Cookies secure-flag ==========================//

//The Secure flag in a cookie ensures that the cookie is only sent over HTTPS connections and never over an insecure HTTP connection.

//How It Works
// When a cookie has the Secure flag, the browser will only send it over HTTPS (not HTTP).
// This helps prevent man-in-the-middle (MITM) attacks where cookies might be intercepted on an insecure network.
// The cookie is still stored on the client side, but it will not be transmitted unless the connection is secure.

// When the cookies is created by Https request,then it will not appear when accessed through HTTP

document.cookie="name=Ayush; secure; max-age=0"

//========================Reading cookies==========================//

// we get all cookies info in single string
// console.log(document.cookie);
// let str = document.cookie;
// console.log(str);
// let cookieString=str.split(/; |=/)
//🔹 Why Doesn't This Work?
// The logical OR (||) operator returns the first truthy value.

// In " ; " || "=", the first operand ("; ") is already truthy.
// So, "; " is always returned and split("; " || "=") is the same as split("; ").

/*let str = "username=Ayush; sessionId=12345; theme=dark";

let cookieArray = str.split(/; |=/);  // Split on "; " OR "="

console.log(cookieArray);

Why Doesn't "; " | "=" Work?
The bitwise OR (|) operator is different from logical OR (||).
"; " | "=" doesn't create an array of delimiters, instead:
The bitwise OR (|) converts characters into numbers (ASCII values) and performs a bitwise operation.
This results in an unexpected numeric value, not a delimiter string.

*/
// console.log(cookieString);
// let map = new Map();
// for(let i=0;i<cookieString.length-1;i++){
//     // map.set(cookieString[i], cookieString[++i]);
// }

// console.log(map)

let str = document.cookie;
console.log(str);
let strarr = str.split(/; |=/);
console.log(strarr);
let map = new Map();
for(let i =0;i<strarr.length-1;i++){
  map.set(strarr[i], strarr[++i]);
  
}
console.log(map)